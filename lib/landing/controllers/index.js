var Controller = {};

Controller.index = function(req, res) {
  res.render('index', {title: 'Express Modular Example'});
};

module.exports = Controller;
