const comparePassword = (user, password) => {
  return new Promise((resolve, reject) => {
    user.comparePassword(password, (err, isMatch) => {
      if (err) reject(err);

      resolve(isMatch);
    });
  });
};

module.exports = { comparePassword };
