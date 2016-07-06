// var newGame = new HangmanGame('elephant');




/// AUTO FOCUS ///

angular.module('utils.autofocus', [])

.directive('autofocus', ['$timeout', function($timeout) {
  return {
    restrict: 'A',
    link : function($scope, $element) {
      $timeout(function() {
        $element[0].focus();
      });
    }
  }
}]);
