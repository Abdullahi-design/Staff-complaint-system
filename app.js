var express = require('express');
var bodyParser = require('body-parser')
var app = express();

var urlencodedParse = bodyParser.urlencoded({extended: false})
app.set('view engine', 'ejs');

app.get('/' || '/home', function(req, res){
    res.render('home')
});
app.get('/contact', function(req, res){
    res.render('contact', {qs: req.query})
});
app.get('/admin-login', function(req, res){
    res.render('admin-login')
});
app.get('/admin', function(req, res){
    res.render('admin', {data: req.body})
});
app.get('/admin-sucess',function(req, res){
    res.render('admin-sucess', {data: req.body})
});
app.get('/contact',function(req, res){
    res.render('contact-sucess', {data: req.body})
});

// post contact to contact sucess
app.post('/contact',urlencodedParse, function(req, res){
    console.log(req.body);
    res.render('admin', {data: req.body})
});

// post contact sucess to home
app.post('/contact-sucess',urlencodedParse, function(req, res){
    console.log(req.body);
    res.render('home', {data: req.body})
});

// post admin button in home page to admin login page 
app.post('/admin',urlencodedParse, function(req, res){
    console.log(req.body);
    res.render('admin-login', {data: req.body})
});

//post admin login page to admin main page
app.post('/admin-login',urlencodedParse, function(req, res){
    console.log(req.body);
    res.render('admin', {data: req.body})
});

//post admin sucess page back to home page
app.post('/admin-sucess', urlencodedParse, function(req, res){
    res.render('home', {data: req.body})
});
// app.post('/admin', urlencodedParse, function(req, res){
//     res.render('home', {data: req.body})
// });

app.listen(4000);
console.log('Hi user');