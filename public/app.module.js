(function() {
	"use strict";
 	angular
		.module("webshop",
			["ngRoute", "webshop.cart", "webshop.product", "webshop.productid"])
		
		.config(function($routeProvider) {
			$routeProvider
			
			.when("/:id", {
        			templateUrl: "./product.html",
        			controller: "productController"
        		})
			.when("/",  {
				templateUrl: "./products.html",
				controller: "productsController"
			})
			
			.otherwise({ redirectTo: '/' });

			})
		.run(function($rootScope){
			$rootScope.cartProducts= {} ;
			$rootScope.totalsum = 0;
			});



	
	
		
		

		





})();