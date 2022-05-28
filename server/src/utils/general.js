const comparePassword = (user, password) => {
  return new Promise((resolve, reject) => {
    user.comparePassword(password, (err, isMatch) => {
      if (err) reject(err);

      resolve(isMatch);
    });
  });
};

const getPagination = (page, size) => {
  const limit = size ? +size : 10;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};

module.exports = { comparePassword, getPagination };
