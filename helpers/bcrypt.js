const bcrypt = require("bcrypt");

const hashPass = (pass) => {
  return bcrypt.hashSync(pass, bcrypt.genSaltSync(8));
};

const checkPass = (plainPass, hashPass) => {
  return bcrypt.compareSync(plainPass, hashPass);
};

module.exports = { hashPass, checkPass };
