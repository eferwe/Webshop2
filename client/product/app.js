/*
   product controller
*/


(function(){
	"use strict";

	angular
	.module("webshop.product", [])
	.controller("productsController", productsController );
	

	function productsController($scope, productsService, cartService, $rootScope){

//		$scope.products = $http.get("data/products.json");
		$scope.categoriesSelected = new Array();
		
		var modelProducts = function(data){
			$scope.products = data;
		}

		var modelCategories = function(data){
			$scope.categories = data;
		}

		var getError =  function(reason){
		$scope.error =  "Some error happend";
		}

		$scope.categoryChange = function(category){

			var i = $scope.categoriesSelected.indexOf(category);  // -1 for not checked
			if(i > -1 ){

				$scope.categoriesSelected.splice(i , 1);
				console.log(category);
			}	
			else{
			$scope.categoriesSelected.push(category);
			console.log(category);
			}
			
		}


		$scope.categoryFilter = function(product){
			if($scope.categoriesSelected.length > 0){
				if($scope.categoriesSelected.indexOf(product.category) < 0){
					return;
				}
			}
			
			return product;
		}

		$scope.sendtoCart = function(product){
			var quantity = this.quantity;
	//	var	 totalsum = total;
		//	var total = this.quantity*product.price;
		//	 $rootScope.totalsum += total;
		
			
			
			cartService.SetCart(product, quantity );
					
		}


		// $scope.sendtoCart = function(product){
		// 	return productsService.sendtoCart1(product);
		// 	 }

		 
		

		productsService.getProducts()
				.then(modelProducts, getError);

		productsService.getCategories()
				.then(modelCategories, getError);			

		// $http.get("data/products.json")
		// 	.then(getProducts , getError);

		// $http.get("data/categories.json")
		// 	.then(getCategories , getError);

		$scope.deleteProduct = function(product){
			productsService.deleteProduct(product)
				.then(function(){
					
				})
		}	

	}


})();