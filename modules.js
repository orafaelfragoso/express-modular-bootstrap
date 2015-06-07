var fs = require('fs');

module.exports = function(app) {

  if ( fs.existsSync('./modules') ) {

    fs.readdirSync('./modules').forEach(function(folder) {
      if (folder === '_shared')
        return;

      var loadedModule = require('./modules/' + folder + '/index.js');
      app.use(loadedModule);
    });

  } else {
    throw '/modules folder does not exist.';
  }

}
