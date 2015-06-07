var express      = require('express'),
    app          = express();


// load modules
require('./modules.js')(app);
require('./config.js')(app);
require('./middlewares.js')(app);


module.exports = app;
