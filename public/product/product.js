(function(){
	angular
		.module("webshop.productid", [])
		.controller("productController", productController);
//var totalsum = 0;
		function productController($scope, productsService, $routeParams, cartService){

		var modelProduct = function(productArray){
			$scope.product = productArray[0];
		}

		$scope.sendtoCart = function(product){
			var quantity = this.quantity;
		//	var total = this.quantity*product.price;
		//	 $rootScope.totalsum += total;
//			 totalsum += total;
		//	console.log($rootScope.totalsum);
	//		console.log(totalsum);
			
			
			cartService.SetCart(product, quantity );
					
		}

		productsService.getProduct($routeParams.id)
			.then(modelProduct);
			console.log($routeParams.id);
	}   





}());