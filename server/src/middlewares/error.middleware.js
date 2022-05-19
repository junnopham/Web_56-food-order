const { validationResult } = require("express-validator");

const errorMiddleware = (err, req, res, next) => {
  const code = error.status || 500;
  const message = error.message || "Some thing when wrong";

  console.error(`[ERROR] - Status: ${code} - Msg: ${message}`);

  return res.status(code).json({
    code,
    status: "error",
    message,
  });
};

const notFoundMiddleware = (req, res, next) => {
  return res.status(404).json({
    code: 404,
    status: "error",
    message: "Not Found",
  });
};

const validateMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = {
  errorMiddleware,
  notFoundMiddleware,
  validateMiddleware,
};
