const { Op } = require("sequelize");

const search = (field, query) => {
  const allFieldQuery = [];
  field.forEach((el) => {
    const obj = {};
    obj[el] = { [Op.iLike]: `%${query}%` };
    allFieldQuery.push(obj);
  });

  const result = {
    [Op.or]: allFieldQuery,
  };
  return result;
};

module.exports = { search };
