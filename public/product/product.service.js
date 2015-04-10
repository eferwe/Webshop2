(function(){
	'use strict';

	var productsService = function($http){

		var getProducts = function (){
			return $http.get("data/products.json")
	        	.then(function (response){
	        		return response.data;
	        	});
		}

		var getProduct = function(id){
			return $http.get("data/products.json")
				.then(function(response){
					return findProductInArray(response.data, id);
				});
		}

		var findProductInArray = function(data, id){
			return data.filter(function(element){
				if(element.id === id){
					return element;
				}
			});
		}
				

		var getCategories = function (){
			return $http.get("data/categories.json")
	        	.then(function (response){
	        		return response.data;
	        	});
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
			getProducts: getProducts,
			getProduct: getProduct,
			getCategories: getCategories
			

		}
	}
          
	angular
		.module("webshop")
		.factory("productsService", productsService);
}());