function errorHandler(err, req, res, next) {
  console.log(`Error: ${err.message}`);

  let statusCode;
  let message;

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
    default:
      statusCode = 500;
      message = "Internal Server Error";
  }

  res.status(statusCode).json({
    message,
  });
}

module.exports = errorHandler;
