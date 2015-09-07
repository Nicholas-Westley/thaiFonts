
var stuff = angular.module('Stuff', ['ngMaterial']);

stuff.controller('MainCtrl', function ($scope, $http, serviceStuff) {

	$scope.thaiInput = "สวัสดีครับ";

	$scope.fonts = [
		"Suphanburi",
		"BangLiKoSaNa",
		"Akhanake",
		"SabuyDee",
		"Circular",
		"SarunsManorah",
		"TorsilpWadkhen"
	];
    

    /*
	$scope.getExamples = function(examples) {
		$http.get('/api/examples')
			.success(function(data) {
				$scope.stuffs = data.stuffs; 
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});	
	};
	*/


});
