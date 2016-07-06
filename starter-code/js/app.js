console.log('app.js loaded!');

// initialize the application
angular
  .module("hangmanApp", [])
  .controller("hangmanCtrl", hangmanCtrl)

  hangmanCtrl.$inject=["$scope"];

  function hangmanCtrl($scope) {
    // var testVariable = "elephant";
    $scope.game = new HangmanGame("elephant");
    $scope.guessLetter = function(input){
      $scope.game.guess(input);
      $scope.game.input = "";
    }
  }
