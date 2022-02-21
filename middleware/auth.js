const authenticateMiddleware = async (req, res, next) => {
  console.log(req.headers.authorization);
  next();
};

module.exports = authenticateMiddleware;
