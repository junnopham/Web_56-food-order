const jwt = require("jsonwebtoken");
const dayjs = require("dayjs");

const User = require("../models/user.model");
const { comparePassword } = require("../utils/general");

class AuthController {
  async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) throw new Error("Email does not exist!");

      const isMatch = await comparePassword(user, password);

      if (!isMatch) throw new Error("Password does not match!");

      const SECRET_KEY = process.env.SECRET_KEY || "booking-app";

      const jwtToken = await jwt.sign(
        {
          _id: user._id,
        },
        SECRET_KEY,
        {
          expiresIn: 7 * 24 * 60 * 60,
        }
      );

      res.cookie("Authorization", jwtToken, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        //secure: true;
      });

      const { password: hidden, ...data } = user.toObject();

      return res.json({
        message: "success",
        key: "Bearer",
        token: jwtToken,
        expiresAt: dayjs().add(7, "day").valueOf(),
        data,
      });
    } catch (err) {
      res.status(401).json({
        code: 401,
        message: err.message,
      });
    }
  }

  async register(req, res) {
    const { name, email, password } = req.body;

    try {
      const findEmail = await User.findOne({ email }).lean();

      if (findEmail) {
        throw new Error("E-mail already in use");
      }

      const newUser = new User({
        name,
        email,
        password,
      });

      await newUser.save();

      return res.status(201).json({
        code: 201,
        status: "success",
        data: newUser,
      });
    } catch (e) {
      return res.status(401).json({
        code: 401,
        status: "error",
        message: e.message || "Abc",
      });
    }
  }

  async me(req, res) {
    return res.json({
      code: 200,
      status: "success",
      data: req.user,
    });
  }

  logout(req, res) {
    res.clearCookie("Authorization");
    return res.json({
      code: 200,
      status: "success",
      message: "Logout success!",
    });
  }
}

module.exports = new AuthController();
