module.exports = errorHandler = (err, req, res, next) => {
  let code = err.code || 500;
  let message = "Internal Server Code";

  switch (err.name) {
    // case "SequelizeValidationError":
    //   code = 400;
    //   const errors = err.errors.map(e => e.message);
    //   message = errors;
    //   break;
    // case "SequelizeUniqueConstraintError":
    //   code = 400;
    //   message = `${req.body.email} already taken`;
    //   break;
    case "Unauthorized":
      message = `Invalid email or password`;
      break;
    case "badRequest":
      message = `${err.path} with id:${err.id} not found`;
      if (err.path === "image") message = `${err.path} must be filled`;
      break;
    case "notFound":
      message = `error, ${err.path} with id:${err.id} not found`;
      break;
    case "Forbidden":
      message = `user do not have authorization`;
      break;
    case "InvalidToken":
      message = `Invalid Token`;
      break;
    case "needLogin":
      message = `Please login first`;
      break;
  }
  res.status(code).json({ message });
};
