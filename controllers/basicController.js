const basicController = {};

basicController.get = (req, res) => {
  res.send('Welcome to the Application');
};

module.exports = basicController;