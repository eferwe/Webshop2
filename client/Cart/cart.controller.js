(function(){
	"use strict";

	angular
	.module("webshop.cart", [])
	.controller("cartController", cartController );

	function cartController($scope, $rootScope, $http){

     $scope.deleteCartProduct = function(product){
     var cartproduct = $rootScope.cartProducts[product.product.name];
     var productamount = cartproduct.product.price*cartproduct.quantity;
     $rootScope.totalsum -= productamount;
     console.log(productamount);
     	delete $rootScope.cartProducts[product.product.name];
		}     

	 $scope.saveOrder = function(product){    //tuka sum 07.04.15

	 //	var order = $rootScope.cartProducts[product.product.name] ;	
	 //	console.log(order);
	 console.log($rootScope.cartProducts);

	 var products = [];

	for (var property in $rootScope.cartProducts) {
	    // if ($rootScope.cartProducts.hasOwnProperty(property)) {
	        	 	console.log("adding item");
				 	console.log(property);
				 	products.push(property);
	    // }
	}

	//  $rootScope.cartProducts.forEach(function(entry) {
	//  	console.log("adding item");
	//  	console.log(entry);
	//  	products.push(entry);
	// });

	 // for (var i = 0; i <= 0; i++) {
	 // 	console.log("adding item");
	 // 	console.log($rootScope.cartProducts[i].product);
	 // 	products.push($rootScope.cartProducts[i].product);
	 // };

	 // $.each(cartProducts, function(index, val) {
	 // 	products.push(val.product);
	 // });
	 console.log(products);
	// $rootScope.cartProducts.each(function(index, el) {
	// 	products.push(el.product);
	// });

	 	return $http.post("/api/order" ,
	 	  {
	 	 	  product : products,
	 	 	//   quantity : order.
	 	 	  // total : $rootScope.cartProducts[product.name].total
	 	 	   totalsum : $rootScope.totalsum 


	 	 }

	 		)
	        	 .then(function (response){
	        	 	console.log(response);
	        	 	return response;
	        	 });
		
	 }

	}


})();