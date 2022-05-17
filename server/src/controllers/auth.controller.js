const User = require("../models/user.model");

class AuthController {
  async login(req, res) {
    return res.json({
      message: "Done!",
    });
  }

  async register(req, res) {
    const { name, email, password } = req.body;

    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();

    return res.json({
      code: 200,
      message: "success",
      data: newUser,
    });
  }
}

module.exports = new AuthController();
