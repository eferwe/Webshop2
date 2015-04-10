(function(){
	angular
		.module("webshop.productid", [])
		.controller("productController", productController);
//var totalsum = 0;
		function productController($scope, productsService, $routeParams, cartService){

		var modelProduct = function(productArray){
			$scope.product = productArray[0];
		}

		if($routeParams.id){
			productsService.getProduct($routeParams.id)
				.then(function(response){
					$scope.product = response;
				});
			$scope.state = "update";
		}
		else{
			$scope.state = "create";
		}

		var notify = function(notification){
			$scope.notification = notification;
		}

		// $scope.save = function(){
		// 	var product = {
		// 		id: this.id,
		// 		name: this.name,
		// 		price: this.price,
		// 		category: this.category,
		// 		imageUrl: this.imageUrl,
		// 		describtion: this.describtion
		// 		//alcohol: this.alcohol
		// 	}

		// 	productsService.saveProduct(product)
		// 		.then(notify);
		// 	//notify(productsService.saveProduct(product));
		// }

		$scope.save = function(){

			var product = {
				id: $scope.product.id,
				name: $scope.product.name,
				price: $scope.product.price,
				category: $scope.product.category,
				imageUrl: $scope.product.imageUrl,
				describtion: $scope.product.describtion
				
			}

			if($scope.state === "create"){
				productsService.createProduct(product)
					.then(notify);
			}
			else{
				productsService.updateProduct(product, $scope.product.id)
					.then(notify);
			}
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