(function(){
	"use strict";

	angular
	.module("webshop.cart", [])
	.controller("cartController", cartController );

	function cartController($scope, $rootScope){

     $scope.deleteCartProduct = function(product){
     var cartproduct = $rootScope.cartProducts[product.product.name];
     var productamount = cartproduct.product.price*cartproduct.quantity;
     $rootScope.totalsum -= productamount;
     console.log(productamount);
     	delete $rootScope.cartProducts[product.product.name];


     	 


		}     

	}


})();