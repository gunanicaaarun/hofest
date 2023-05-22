angular.module("myApp", []).controller("formCtrl", function ($scope) {
  // Initialize any scope variables here
  $scope.form = true;
  $scope.first = false; 
  // Submit form function
  $scope.submitForm = function () {
    $scope.form = false;
    $scope.first = true; 
    return;
    // Perform any additional logic here
  };

  $scope.reload = function() {
    location.reload();
  }
});
