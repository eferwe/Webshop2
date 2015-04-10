// exports.index = function(req, res){
//   // render a view: /views/index.html
//   // res.render('index'); 

//   // render a text
//   // res.send("index route")

//   // sends a 200 (OK)
//   res.send(200);
// };

// exports.products = function(req, res){
//   var ProductsModel = require("../../models/products.js");
//   ProductsModel.find(function(err, data){
//     if(err) console.error;
//     res.json(data);
//   })
// }

// exports.product = function(req, res){
//   var ProductsModel = require("../../models/products.js");
//   ProductsModel.findOne({id: req.params.id}, function(err, data){
//     if(err) console.error;
//     res.json(data);
//   })
// }

// exports.createProduct = function(req, res){
//   var ProductsModel = require("../../models/products.js");
//   var productData = req.body;
//   var product = new ProductsModel(productData);
//   product.save(function(err){
//     if(err) console.error;
//      just to check if it went well... 

    
//     ProductsModel.find(function(err, data){
//       if(err) console.error;
//         console.log(data);
//     })
    
    
//   })  
// }

// exports.updateProduct = function(req, res){
//   var ProductsModel = require("../../models/products.js");
//   var productData = req.body;
//   var productId = req.params.id;
//   var query = {id: req.params.id};
//   ProductsModel.findOneAndUpdate(query, productData, function(err, response){
    
//   })
// }

// exports.deleteProduct = function(req, res){
//   var ProductsModel = require("../../models/products.js");
//   var productId = req.params.id;
//   var query = {id: req.params.id};
//   ProductsModel.remove(query, function(err){

//   })

// }








// old part

 var Products =  require('../../models/products.js');


// Wrap all the methods in an object

var product = {
  read: function(req, res, next){
    res.json({type: "Read", id: req.params.id});
  },
  create: function(req, res, next){
    res.send(req.body);
  },
  update: function(req, res, next){
    res.json({type: "Update", id: req.params.id, body: req.body });
  },
  delete: function(req, res, next){
    res.json({type: "Delete", id: req.params.id});
  },
  getAll: function(req, res, next){
     Products.find(function(err, data){
      if(err) console.error;
      res.json(data);
    })
  } 
}

// // Return the object
 module.exports = product;