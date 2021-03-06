var express = require('express');
var ejs = require('ejs');
var session = require('express-session');

var app = express();

app.engine('ejs', ejs.renderFile);
app.use(session({
    secret: 'hoge',
    resave: true,
    saveUninitialized: true,
}));

app.get('/', function (req, res) {
    var cnt = req.session.cnt == undefined ? 0 : req.session.cnt;
    cnt++;
    req.session.cnt = cnt;

    res.render('temp4.ejs', {
        cnt: cnt
    });
});

var server = app.listen(1234, function () {
    console.log('サーバを起動しました');
})