var thaiFonts = angular.module('ThaiFonts');

thaiFonts.directive('setupMe', ['$compile', function($compile) {
    return {
        link: function(scope, element, attrs) {
        	scope.selectInput = function() {
        		setTimeout(function() {
           			element.select();
           		}, 10);
           	};
        },
    }
}]);

