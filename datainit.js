var mongoose = require('mongoose'),
	dbname = "angular_mongodb";

var Product = mongoose.model("Product", {
		id : String,
		name: String,
		price: Number,
		category: String,
		imageUrl: String,
		describtion: String
		// alcohol: Number
});

mongoose.connect("mongodb://localhost/" + dbname);


var db = mongoose.connection;
db.on("error", console.error);
db.once("open", deleteProducts);

function deleteProducts(){
	Product.remove({}, function(err){
		if(err) console.log(err);
		insertProducts()
	});
}

function insertProducts(){
	 Product.create(
	 
	{
		"id":"Brooklyn",
		"name":"Brooklyn Black Chocolate Stout",
		"price":45,
		"category": "Dark Stout",
		"imageUrl": "images/brooklyn-black-chocolate-stout.jpg",
		"describtion": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus delectus autem error esse suscipit iure vel, blanditiis, sint quaerat. Et modi perferendis impedit ullam quisquam nemo soluta ea ratione saepe. "

	},
	{
		"id":"BrewDog",
		"name":"BrewDog Smokehead",
		"price":66 ,
		"category": "Dark Stout",
		"imageUrl": "images/brewdog-smokehead.jpg",
		"describtion": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis sit maxime numquam perferendis, deleniti unde corporis nisi quia iste, eum dolore, obcaecati debitis quaerat ullam officia temporibus libero soluta cumque."


	},
	{
		"id":"Anchor",
		"name":"Anchor Steam",
		"price":33 ,
		"category":"Fruit",
		"imageUrl": "images/anchor-steam.jpg",
		"describtion": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae sed, ullam, cumque repudiandae quis nemo? Ducimus voluptates aspernatur quas excepturi, distinctio modi! Voluptas perferendis odit quibusdam repudiandae porro non sunt."


	},
	{
		"id":"Anchor Christmas",
		"name":"Anchor Christmas Ale",
		"price":73,
		"category":"Sweet",
		"imageUrl": "images/anchor-christmas-ale.jpg",
		"describtion": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ipsa sequi, impedit culpa perspiciatis, non, consequuntur quisquam quis sed aut facilis neque obcaecati, maxime tempora. Eum ut repellendus, sapiente consequuntur?" 

	},
	{
		"id":"Allagash",
		"name":"Allagash White",
		"price":55 ,
		"category":"White Stout",
		"imageUrl":"images/allagash-white.jpg",
		"describtion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, id sunt fugiat itaque sapiente ut ipsum vero, laboriosam ipsam non, corporis illum consectetur perspiciatis, optio neque totam ducimus recusandae delectus!"
	 } 

	  
	);	

	// products.save(function(err){
	// 	if(err) console.log(err);
	// });
}





// {
// 		name: "Old Rasputin",
// 		price: 40,
// 		category: "Russian Imperial Stout",
// 		image: "old_rasputin.jpg",
// 		brewery: "North Coast Brewing",
// 		alcohol: 9	
// 	}
