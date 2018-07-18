var express = require('express');
var helmet = require('helmet');
var app = express();
app.use(helmet());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/currenttime', function (req, res) {
    var d = new Date();
    res.json({ "time": d.toLocaleTimeString() });
});

app.listen(3000);