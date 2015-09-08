
var thaiFonts = angular.module('ThaiFonts', ['ngMaterial']);

thaiFonts.controller('MainCtrl', function ($scope, $http) {
	
	$scope.thaiInput = "";
	$scope.newExampleText = ""
	$scope.fonts = [
		"Suphanburi",
		"BangLiKoSaNa",
		"Akhanake",
		"SabuyDee",
		"Circular",
		"SarunsManorah",
		"TorsilpWadkhen"
	];
	$scope.examples = [];


	$scope.getExamples = function() {

		$http.get('/api/examples/')
			.success(function(data) {
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}

	$scope.getExamples();


	$scope.addExample = function() {

		if($scope.newExampleText === "" || $scope.newExampleText.length < 5) {
			return;
		}

		$http.post('/api/example', {content: $scope.newExampleText})
			.success(function(example) {
				$scope.newExampleText = "";
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};




});



