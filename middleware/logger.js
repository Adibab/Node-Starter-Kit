
const logger = (request, response, next) => {
  console.log(
    `${request.protocol}://${request.get("host")}${request.originalUrl}`
  );
  next();
};



module.exports = logger