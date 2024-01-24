const { User } = require("../models");
const { generateToken, comparePassword } = require("../helpers");

class UserController {
  static async register(req, res, next) {
    try {
      const { name, email, password } = req.body;
      const newUser = await User.create({
        name,
        email,
        password,
      });

      const token = generateToken({
        id: newUser.id,
        email: newUser.email,
        password: newUser.password,
      });
      res.status(201).json({
        message: `your token: ${token}`,
      });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user || !comparePassword(password, user.password)) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const token = generateToken({ id: user.id, email: user.email });

      res.status(200).json({
        message: `Login Succsess, your token: ${token}`,
      });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  static async secure(req, res, next) {
    try {
      const user = req.user;
      res.json({
        message: `Account secure, success protect user: ${user}`,
      });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  static async google(req, res, next) {
    try {
      let google_token = req.headers.google_token;
      let ticket = await google_oauth_client.verifyIdToken({
        idToken: google_token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      console.log(payload, "<<<");

      let [user, isNew] = await User.findOrCreate({
        where: { email: email },
        default: {
          username: username,
          email: email,
          password: generateToken({ random: String(Math.random()) }),
        },
      });

      let accessToken = generateToken({ id: user.id });

      res.json({ message: "Login Success", accessToken });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
