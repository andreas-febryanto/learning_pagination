const { Order, Book, Customer } = require("../models");
const { getPagination } = require("../helpers/pagination");
const { search } = require("../helpers/search");
const { Op } = require("sequelize");

class orderController {
  static getAll = async (req, res, next) => {
    try {
      const { page, size, qBook, qCust } = req.query;
      const paramQuery = {};

      paramQuery.attributes = {
        exclude: ["createdAt", "updatedAt"],
      };
      const { limit, offset } = getPagination(page, size);
      paramQuery.limit = limit;
      paramQuery.offset = offset;

      let searchBook;
      let searchCustomer;
      if (qBook) {
        searchBook = search(["name", "genre"], qBook);
      }
      if (qCust) {
        searchCustomer = search(["name", "role"], qCust);
      }

      paramQuery.include = [
        {
          model: Book,
          attributes: ["id", "name", "genre"],
          where: searchBook,
        },
        {
          model: Customer,
          attributes: ["id", "name", "role"],
          where: searchCustomer,
        },
      ];
      paramQuery.order = [["id", "ASC"]];

      const orders = await Order.findAll(paramQuery);
      res.status(200).json(orders);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  static async getDetail(req, res, next) {
    try {
      const orderId = Number(req.params.id);
      const paramQuery = {};

      paramQuery.attributes = { exclude: ["createdAt", "updatedAt"] };
      paramQuery.include = [
        {
          model: Book,
          attributes: ["id", "name", "genre"],
        },
        {
          model: Customer,
          attributes: ["id", "name", "role"],
        },
      ];

      const result = await Order.findByPk(orderId, paramQuery);
      if (!result)
        throw { code: 400, name: "badRequest", id: orderId, path: "order" };
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async insertOrder(req, res, next) {
    try {
      let { CustomerId, BookId } = req.body;
      const newOrder = { CustomerId, BookId };
      const order = await Order.create(newOrder);
      res.status(201).json(order);
    } catch (err) {
      next(err);
    }
  }

  static async updateOrder(req, res, next) {
    try {
      const orderId = Number(req.params.id);
      let { CustomerId, BookId } = req.body;

      const result = await Order.findByPk(orderId);
      if (!result)
        throw { code: 400, name: "badRequest", id: orderId, path: "order" };

      const updatedOrder = { CustomerId, BookId };
      const order = await Order.update(updatedOrder, {
        where: { id: orderId },
        returning: true,
      });
      res.status(200).json(order[1][0]);
    } catch (err) {
      next(err);
    }
  }

  static async deleteOrder(req, res, next) {
    try {
      const orderId = Number(req.params.id);

      const result = await Order.findByPk(orderId);
      if (!result)
        throw { code: 400, name: "badRequest", id: orderId, path: "order" };

      await Order.destroy({ where: { id: orderId } });
      res.status(200).json({ message: `order with id:${orderId} deleted` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = orderController;
