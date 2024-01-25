const { tokenVerf } = require("../helpers/jwt");
const { User } = require("../models");

async function authenticate(req, res, next) {
  try {
    let token = req.headers.authorization;
    if (!token) {
      throw { name: "Unauthorized" };
    }

    let [bearer, access_token] = token.split(" ");
    if (bearer !== "Bearer") {
      throw { name: "Unauthorized" };
    }

    let payload = tokenVerf(access_token);
    console.log(payload);

    let user = await User.findByPk(payload.id);
    if (!user) {
      throw { name: "InvalidToken" };
    }

    req.user = { id: user.id };

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authenticate;
