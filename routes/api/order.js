var Orders =  require('../../models/orders.js');


// Wrap all the methods in an object

var order = {
  read: function(req, res, next){
    res.json({type: "Read", id: req.params.id});
  },
  create: function(req, res, next){
    try {
       var order = new Orders();
        order = req.body;
        // order.save = (function(err){
        //   if(err)
        //       res.send(err);
        //     res.json(order);
        // })
      order.save(function (err) {
        if (err) return console.log(err);
        Orders.findById(order, function (err, doc) {
          if (err) return console.log(err);
          console.log(doc); // { name: 'mongodb.org', _id: '50341373e894ad16347efe12' }
        })
      });
    }
    catch(err) {
        console.log(e);
    }
  },
  update: function(req, res, next){
    res.json({type: "Update", id: req.params.id, body: req.body });
  },
  delete: function(req, res, next){
    res.json({type: "Delete", id: req.params.id});
  },
  getAll: function(req, res, next){
     Orders.find(function(err, data){
      if(err) console.error;
      res.json(data);
    })
  } 
}

// Return the object
module.exports = order;