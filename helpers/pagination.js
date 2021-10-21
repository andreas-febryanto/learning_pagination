const getPagination = (page, size) => {
  const limit = size ? Number(size) : 5;
  let offset = page ? page * limit - limit : 0;

  if (Math.sign(offset) === -1) offset = 0;

  return { limit, offset };
};

module.exports = { getPagination };
