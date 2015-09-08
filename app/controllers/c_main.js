
var thaiFonts = angular.module('ThaiFonts', ['ngMaterial']);

thaiFonts.controller('MainCtrl', function ($scope, $http, $mdToast, $animate) {
	
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

	$scope.toast = function(msg, time) {
		$mdToast.show(
      		$mdToast.simple()
        	.content(msg)
        	.position("top right")
        	.hideDelay(time)
		);
	};


	$scope.addExample = function() {

		if($scope.newExampleText === "" || $scope.newExampleText.length < 10) {
			$scope.toast("Example must be at least 10 characters", 3000);
			return;
		}

		$http.post('/api/example', {content: $scope.newExampleText})
			.success(function(example) {
				$scope.newExampleText = "";
				$scope.toast('Example Added To Database', 1000);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

});





