
var thaiFonts = angular.module('ThaiFonts', ['ngMaterial']);

thaiFonts.controller('MainCtrl', function ($scope, $http) {

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
    

});
