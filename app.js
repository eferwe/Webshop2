var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var databaseName = 'angular_mongodb';












//var routes = require('./routes/index');
// var users = require('./routes/users');



//Routes set up 
var router  = express.Router();
//var routes = require('./routes/index');
var product = require('./routes/api/product');
var order = require('./routes/api/order');
var app = express();



//----------------------//

//get products
// app.get("/ok", routes.index);
// app.get("/products", routes.products);



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));




   


// app.all('*', function(req, res, next) {
//        res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
//        res.header("Access-Control-Allow-Origin", "*");
//        res.header("Access-Control-Allow-Headers", "X-Requested-With");
//        res.header('Access-Control-Allow-Headers', 'Content-Type');
//        next();
// });


app.use('/', router);
//app.use('/product', product);
//app.use('/order', order);
//app.use('/users', users);



// Get all products
 //router.get('/api/products', product.getAll);
 //router.get('/api/orders', order.getAll);
 


 router.get('/api/product', product.getAll);
 router.get('/api/order', order.getAll);

// // Create a product
 router.post('/api/product', product.create);

// //Create a order
 router.post('/api/order', order.create);


// Get one product, update one product, delete one product
router.route('/api/product/:id')
  .get(product.read)
  .put(product.update)
  .delete(product.delete);

// // Get one order , update one  order , delete one order
router.route('/api/order/:id')
  .get(order.read)
  .put(order.update)
  .delete(order.delete);



mongoose.connect('mongodb://localhost/' + databaseName);


var db = mongoose.connection;

db.once('open', function(){

console.log("database running");

});

/* Routes */
//app.get("/ok", routes.index);
// app.get("/api/product/:id", routes.product);
// app.get("/api/products", routes.products);
// app.post("/api/product", routes.createProduct);
// app.put("/api/product/:id", routes.updateProduct);
// app.delete("/api/product/:id", routes.deleteProduct);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
