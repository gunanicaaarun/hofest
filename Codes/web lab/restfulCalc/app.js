angular.module('calculatorApp', [])
  .controller('CalculatorController', ['$scope', '$http', function($scope, $http) {
    $scope.num1 = 0;
    $scope.num2 = 0;
    $scope.result = 0;
    $scope.error = '';

    $scope.add = function() {
      $http.post('http://localhost:3000/add', { num1: $scope.num1, num2: $scope.num2 })
        .then(function(response) {
          $scope.result = response.data.result;
          $scope.error = '';
        })
        .catch(function(error) {
          $scope.result = 0;
          $scope.error = error.data.error;
        });
    };

    $scope.subtract = function() {
      $http.post('http://localhost:3000/subtract', { num1: $scope.num1, num2: $scope.num2 })
        .then(function(response) {
          $scope.result = response.data.result;
          $scope.error = '';
        })
        .catch(function(error) {
          $scope.result = 0;
          $scope.error = error.data.error;
        });
    };

    $scope.multiply = function() {
      $http.post('http://localhost:3000/multiply', { num1: $scope.num1, num2: $scope.num2 })
        .then(function(response) {
          $scope.result = response.data.result;
          $scope.error = '';
        })
        .catch(function(error) {
          $scope.result = 0;
          $scope.error = error.data.error;
        });
    };

    $scope.divide = function() {
      $http.post('http://localhost:3000/divide', { num1: $scope.num1, num2: $scope.num2 })
        .then(function(response) {
          $scope.result = response.data.result;
          $scope.error = '';
        })
        .catch(function(error) {
          $scope.result = 0;
          $scope.error = error.data.error;
        });
    };
  }]);
