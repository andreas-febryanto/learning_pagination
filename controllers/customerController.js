const { Customer } = require("../models");
const { getPagination } = require("../helpers/pagination");
const { search } = require("../helpers/search");
const { hashPass, checkPass } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");

class customerController {
  static getAll = async (req, res, next) => {
    try {
      const { page, size, q } = req.query;
      const paramQuery = {};

      paramQuery.attributes = {
        exclude: ["password", "createdAt", "updatedAt"],
      };

      const { limit, offset } = getPagination(page, size);
      paramQuery.limit = limit;
      paramQuery.offset = offset;

      if (q) {
        const searchQuery = search(["name", "role"], q);
        paramQuery.where = searchQuery;

        //* Note to myself
        // paramQuery.where = { [Op.or]: [{ name: { [Op.like]: `%${q}%` } }] };
      }

      paramQuery.order = [["id", "ASC"]];
      const customers = await Customer.findAll(paramQuery);

      res.status(200).json(customers);
    } catch (error) {
      next(error);
    }
  };

  static async getDetail(req, res, next) {
    const userId = Number(req.params.id);
    const paramQuery = {};

    paramQuery.attributes = {
      exclude: ["password", "createdAt", "updatedAt"],
    };

    try {
      const result = await Customer.findByPk(userId, paramQuery);
      if (!result)
        throw { code: 400, name: "badRequest", id: userId, path: "user" };
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async insertCustomer(req, res, next) {
    try {
      let { name, password, role } = req.body;
      const newCustomer = { name, password: hashPass(password), role };

      const customer = await Customer.create(newCustomer);
      res.status(201).json(customer);
    } catch (err) {
      next(err);
    }
  }

  static async updateCustomer(req, res, next) {
    try {
      const customerId = Number(req.params.id);
      const { name, role } = req.body;

      const result = await Customer.findByPk(customerId);
      if (!result)
        throw { code: 400, name: "badRequest", id: customerId, path: "user" };

      const updatedCustomer = { name, role };
      const customer = await Customer.update(updatedCustomer, {
        where: { id: customerId },
        returning: true,
      });
      res.status(200).json(customer[1][0]);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async deleteCustomer(req, res, next) {
    const customerId = Number(req.params.id);

    try {
      const result = await Customer.findByPk(customerId);
      if (!result)
        throw { code: 400, name: "badRequest", id: customerId, path: "user" };

      await Customer.destroy({ where: { id: customerId } });
      res.status(200).json({ message: `user with id:${customerId} deleted` });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static login = async (req, res, next) => {
    try {
      const { name, password } = req.body;
      const matchCustomer = await Customer.findOne({ where: { name } });
      if (!matchCustomer) throw { code: 401, name: "Unauthorized" };

      const isCustomer = checkPass(password, matchCustomer.password);
      if (!isCustomer) throw { code: 401, name: "Unauthorized" };

      const { id, name: username, role } = matchCustomer;
      const access_token = signToken({ id, username, role });
      res
        .status(200)
        .json({ access_token, message: "you have succesfully login" });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = customerController;
