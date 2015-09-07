var thaiFonts = angular.module('ThaiFonts');

thaiFonts.directive('thaiInput', function($compile) {

   	return {
      	restrict: 'E',
      	replace: true,
      	transclude: true,
      	template: '<div class=""></div>',
      	link: function(scope, element, attrs) {
        	   element.html('<input>');
      	}
   	}
});

