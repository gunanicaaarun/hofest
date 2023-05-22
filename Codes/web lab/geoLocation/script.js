var app = angular.module("App",[]);
app.controller('MainController', ['$scope', '$window', function($scope, $window) {
    $scope.getLocation = function() {
      if ($window.navigator.geolocation) {
        $window.navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        console.log('Geolocation is not supported by this browser.');
      }
    };
  
    function showPosition(position) {
      $scope.latitude = position.coords.latitude; 
      $scope.longitude = position.coords.longitude;
    }
  
    function showError(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.log('User denied the request for Geolocation.');
          break;
        case error.POSITION_UNAVAILABLE:
          console.log('Location information is unavailable.');
          break;
        case error.TIMEOUT:
          console.log('The request to get user location timed out.');
          break;
        case error.UNKNOWN_ERROR:
          console.log('An unknown error occurred.');
          break;
      }
    }
  }]);
  