var fs = require('fs');

module.exports = function(app) {

  if ( fs.existsSync('./lib') ) {

    fs.readdirSync('./lib').forEach(function(folder) {
      if (folder === '_shared')
        return;

      var loadedModule = require('./lib/' + folder + '/index.js');
      app.use(loadedModule);
    });

  } else {
    throw '/modules folder does not exist.';
  }

}
