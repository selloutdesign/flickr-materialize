var app = angular.module('materializeApp', ['ui.materialize'])
    .controller('BodyController', ["$scope", '$http', function ($scope, $http) {
        vm = this;

        vm.photos = [];
        vm.loading = false;

        vm.submit = function() {
        	console.log('Submitting');
        	console.log(vm.search);
        	vm.loading = true;
        	var flickrUrl = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK&tags="+vm.search;
        	$http.jsonp(flickrUrl).success( function(response) {
        		vm.searched = true;
        		console.log(response.items);
        		vm.photos = response.items;
        		vm.loading = false;
        	}, function(res){
        		console.log(res);
        	}).catch(function(res){
        		console.log('rejected');
        	});
        };

        // vm.submit = function() {
        // 	vm.isLoading = true;
        // 	var flickrUrl = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK&tags="+vm.search;
        // 	$http.jsonp(flickrUrl).success(
        // 		　　function(data){
        // 			vm.searched = true;
        // 			vm.photos = data.items;
        // 			vm.isLoading = false;
        // 		　　}
        // 		);
        // };

    }]);