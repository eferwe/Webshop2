
(function(){
	"use strict";

	angular
	.module("webshop.orders", [])
	.controller("ordersController", ordersController );
	

	function ordersController($scope, productsService, cartService, $rootScope, ordersService){

//	
		
		var modelOrders = function(data){
			$scope.orders = data;
			console.log(data);
		}

		

		var getError =  function(reason){
		$scope.error =  "Some error happend";
		}


		productsService.getOrders()
				.then(modelOrders, getError);

					

		$scope.deleteOrder = function(order){
			ordersService.deleteOrder(order)
				.then(function(){
					
				})
		}	

	}


})();