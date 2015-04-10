var mongoose = require('mongoose');
//var Schema = mongoose.Schema; //novo
var productSchema = {
	    id : String,
		name: String,
		price: Number,
		category: String,
		imageUrl: String,
		describtion: String
	// alcohol: Number	
}

var ProductsModel = mongoose.model("Products", productSchema);

module.exports = ProductsModel;