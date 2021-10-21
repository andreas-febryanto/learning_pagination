module.exports = authzAdmin = async (req, res, next) => {
  try {
    if (req.user.role === "admin") {
      next();
    } else {
      throw { code: 403, name: "Forbidden" };
    }
  } catch (err) {
    next(err);
  }
};
