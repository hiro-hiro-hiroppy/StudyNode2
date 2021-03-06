var express = require('express');
var ejs = require('ejs');
var cookieParser = require('cookie-parser');

var app = express();

app.engine('ejs', ejs.renderFile);
app.use(cookieParser());

app.get('/', function (req, res) {
    var cnt = req.cookies.cnt == undefined ? 0 : req.cookies.cnt;
    cnt++;
    res.cookie('cnt', cnt, {maxAge: 5000});

    res.render('temp3.ejs', {
        cnt: cnt
    });
});

var server = app.listen(1234, function () {
    console.log('サーバを起動しました');
})
