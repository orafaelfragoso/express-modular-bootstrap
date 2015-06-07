var express      = require('express'),
    app          = express();


// load modules
require('./modules.js')(app);
require('./config.js')(app);
require('./routes.js')(app);


module.exports = app;
