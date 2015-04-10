(function(){
	"use strict";

	angular
	.module("webshop.checkout", [])
	.controller("checkoutController", checkoutController );

	function checkoutController($scope, $rootScope){

     $scope.saveOrder = function(product){
     var cartproduct = $rootScope.cartProducts[product.product.name];
     var productamount = cartproduct.product.price*cartproduct.quantity;
     $rootScope.totalsum -= productamount;
     console.log(productamount);
     	delete $rootScope.cartProducts[product.product.name];
		}     

	 		
	}


})();