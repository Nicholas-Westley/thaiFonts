var stuff = angular.module('Stuff');

stuff.directive('thaiInput', function($compile) {

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

