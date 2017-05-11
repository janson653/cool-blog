var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var options = {
    server: {socketOptions: {keepAlive: 1}},
    user: 'craftsmanAdmin',
    pass: 'craftsman123'
}

mongoose.connect('mongodb://localhost/cool-blog', options)
    .then(() = > console.log('connection successful')
)
.
catch((err) = > console.error(err)
)
;

var user = require('./routes/user');
var article = require('./routes/article');
var fileupload = require('./routes/fileupload');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': 'false'}));
app.use(express.static(path.join(__dirname, 'web-dist')));

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200);
        /让options请求快速返回/
    }
    else {
        next();
    }
});

app.use('/api/test', function (req, res, next) {
    res.send('api test');
});

app.use('/api/user', user);

app.use('/api/article', article);

app.use('/api/fileupload', fileupload);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;
