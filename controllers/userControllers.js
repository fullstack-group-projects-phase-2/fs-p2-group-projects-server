const { User } = require("../models/index");
const { generateToken, comparePassword } = require("../helpers/index");

class UserController {
  static async register(req, res, next) {
    try {
      const { fullName, email, password } = req.body;
      const newUser = await User.create({
        fullName,
        email,
        password,
      });

      res.status(201).json({
        id: newUser.id,
        fullName: newUser.fullName,
        email: newUser.email,
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email: email,
        },
      });

      if (!user || !comparePassword(password, user.password)) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const access_token = generateToken({ id: user.id });

      res.status(200).json({ access_token });
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
