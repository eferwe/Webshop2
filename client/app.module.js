(function() {
	"use strict";
 	angular
		.module("webshop",
			["ngRoute", "webshop.cart", "webshop.product", "webshop.productid", "webshop.about", "webshop.contact", "webshop.checkout", "webshop.admin", "webshop.orders"])
		
		.config(function($routeProvider) {
			$routeProvider

			.when("/about",  {
				templateUrl: "./about.html",
				controller: "aboutController"
				})
			.when("/contact",  {
				templateUrl: "./contact.html",
				controller: "contactController"
			})
			.when("/admin",  {
				templateUrl: "./admin.html",
				controller: "adminController"
			})
			.when("/product/:id", {
        			templateUrl: "./product.html",
        			controller: "productController"
        		})
			.when("/",  {
				templateUrl: "./products.html",
				controller: "productsController"
			})
			.when("/productedit/:id",  {
				templateUrl: "./adminproduct.html",
				controller: "productController"
			})
			
			
			.when("/checkout",  {
				templateUrl: "./Checkout.html",
				controller: "checkoutController"
			})
			
			.otherwise({ redirectTo: '/' });

			})
		.run(function($rootScope){
			$rootScope.cartProducts= {} ;
			$rootScope.totalsum = 0;
			});



	
	
		
		

		





})();