(function(){
	'use strict';

	var ordersService = function($http){

		var	 orders = [];
		var getOrders = function (){
			return $http.get("api/order")
	        	.then(function (response){
	        		 setProducts(response.data);
	        		return response.data;
	        	});
		}

		var setOrders = function(data){
			orders = data;
		}

		var getOrder = function(id){
			return $http.get("api/order")
				.then(function(response){
					return findOrderInArray(response.data, id);
				});
		}

		var findOrderInArray = function(data, id){
			return data.filter(function(element){
				if(element.id === id){
					return element;
				}
			});
		}
				

		

		// var saveProduct = function(product){
		// 	console.log(product);
		// 	return $http.post("/product/", product)
		// 				.then(function(response){
		// 					return response.data;
		// 				})
		// }

		// var orderProduct = function(order){
		// 	return $http.post("/api/order", order)
		// 				.then(function(response){
		// 					return response.data;
		// 					console.log(order)
		// 				})
		// }

		// var updateProduct = function(product, id){
		// 	return $http.put("/api/product/" + id, product)
		// 				.then(function(response){
		// 					return response.data;
		// 				})
		// }

		var deleteOrder = function(order){
			return $http.delete("/api/order/" + order.id)
						.then(function(response){
							return response.data;
						})
		}

		// var getError =  function(reason){
		// return $scope.error =  "Some error happend";
		// }	

		// var sendtoCart = function(product, quantity){
			 
		// 	var total = quantity*product.price;
			 
		 
		// 	$rootScope.totalsum += total;

		// 	console.log(quantity);


			
		//  //   $rootScope.cartService.SetCart(product, quantity, total);
		// 	 //		cartService.SetCart(product, quantity, total);
		// }


		return {
			getOrders: getOrders,
			setOrders: setOrders,
			// 
			getOrder: getOrder,
			deleteOrder : deleteOrder
			
			

		}
	}
          
	angular
		.module("webshop")
		.factory("ordersService", ordersService);
}());