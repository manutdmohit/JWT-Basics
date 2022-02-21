exports.login = async (req, res) => {
  res.send('Fake Login/Register/Signup Route');
};

exports.dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello, Ram`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};
