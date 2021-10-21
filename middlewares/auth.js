const { verifyToken } = require("../helpers/jwt");
const { Customer } = require("../models");

module.exports = authentication = async (req, res, next) => {
  try {
    if (!req.headers.access_token) throw { code: 401, name: "InvalidToken" };

    const { access_token: accessToken } = req.headers;
    const payload = verifyToken(accessToken);

    const isUser = await Customer.findByPk(payload.id);
    if (!isUser) throw { code: 401, name: "Unauthorized" };

    req.user = {
      id: payload.id,
      username: payload.username,
      email: payload.email,
      role: payload.role,
    };

    next();
  } catch (err) {
    next(err);
  }
};
