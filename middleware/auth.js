const jwt = require('jsonwebtoken');

const CustomAPIError = require('../errors/custom-error');

const authenticateMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new CustomAPIError('Unauthorized', 401);
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new CustomAPIError('Unauthorized', 401);
  }
};

module.exports = authenticateMiddleware;
