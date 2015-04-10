(function(){
	'use strict';

	var productsService = function($http){

		var	 products = [];
		var getProducts = function (){
			return $http.get("api/product")
	        	.then(function (response){
	        		 setProducts(response.data);
	        		return response.data;
	        	});
		}

		var setProducts = function(data){
			products = data;
		}

		var getProduct = function(id){
			return $http.get("api/product")
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
			return $http.get("data/categories.json")  // to change this to MongoDB
	        	.then(function (response){
	        		return response.data;
	        	});
		}

		// var saveProduct = function(product){
		// 	console.log(product);
		// 	return $http.post("/product/", product)
		// 				.then(function(response){
		// 					return response.data;
		// 				})
		// }

		var createProduct = function(product){
			return $http.post("/api/product", product)
						.then(function(response){
							return response.data;
							console.log(product)
						})
		}

		var updateProduct = function(product, id){
			return $http.put("/api/product/" + id, product)
						.then(function(response){
							return response.data;
						})
		}

		var deleteProduct = function(product){
			return $http.delete("/api/product/" + product.id)
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
			getProducts: getProducts,
			getProduct: getProduct,
			// 
			createProduct: createProduct,
			updateProduct: updateProduct,
			deleteProduct: deleteProduct,
			getCategories: getCategories
			

		}
	}
          
	angular
		.module("webshop")
		.factory("productsService", productsService);
}());