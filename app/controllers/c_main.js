'use strict';

var thaiFonts = angular.module('ThaiFonts', ['ngMaterial', 'ngSanitize']);

thaiFonts.controller('MainCtrl', function ($scope, $http, $mdToast, $animate, test) {
	
	$scope.thaiInput = "";
	$scope.newExampleText = ""
	$scope.showApp = false;
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


	$scope.examples = [];
	$scope.getExamples = function() {
		$http.get('/api/examples/')
			.success(function(data) {
				$scope.examples = data;
				$scope.thaiInput = $scope.examples[Math.floor(Math.random()*$scope.examples.length)].content;
				$scope.nextQuestion();

				$scope.showApp = true;
				$scope.selectInput();
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

	//TEST
	$scope.testAnswer = "";
	$scope.testQuestion = "";
	$scope.testQuestionOriginal = "";
	

	$scope.enterTestText = function(event) {
		if(event.keyCode === 13) {
			$scope.nextQuestion();
		} else {
			$scope.testQuestion = test.compareInput($scope.testQuestionOriginal, $scope.testAnswer);
		}
	};
	$scope.nextQuestion = function() {
		$scope.testAnswer = "";
		$scope.testFont = $scope.fonts[Math.floor(Math.random()*$scope.fonts.length)];
		$scope.testQuestion = $scope.examples[Math.floor(Math.random()*$scope.examples.length)].content;
		$scope.testQuestionOriginal = $scope.testQuestion;
	};
});





