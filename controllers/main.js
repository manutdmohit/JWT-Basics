const CustomAPIError = require('../errors/custom-error');
exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomAPIError('Please provide email and password', 400);
  }

  res.send('Fake Login/Register/Signup Route');
};

exports.dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello, Ram`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};
