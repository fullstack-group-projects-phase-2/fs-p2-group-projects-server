function errorHandler(err, req, res, next) {
  console.log(err.name);
  console.log(err);

  let statusCode = "500";
  let message = "Internal Server Error";

  switch (err.name) {
    case "Unauthorized":
      statusCode = 401;
      message = "Unauthorized - Bearer token is required";
      break;
    case "InvalidToken":
      statusCode = 401;
      message = "Invalid Token - User not found";
      break;
    case "JsonWebTokenError":
      statusCode = 401;
      message = "Invalid Token - Malformed token";
      break;
  }

  res.status(statusCode).json({ message });
}

module.exports = errorHandler;
