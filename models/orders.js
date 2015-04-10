var mongoose = require('mongoose');
//var Schema = mongoose.Schema;
var OrderSchema =  {
	 //    id : String,
		// name: String,
		// price: Number,
		// category: String,
		// imageUrl: String,
		// describtion: String
	// alcohol: Number	
		product : [String], 	  // old name
		quantity : Number,
		total : Number,
		totalsum : Number

}

var OrdersModel = mongoose.model("Orders", OrderSchema);

module.exports = OrdersModel;