var app = angular.module("App", []);
app.controller("calculator", function ($scope) {
  $scope.operators = ["+", "-", "/", "x"];
  $scope.num1 = $scope.num2 = 0;
  $scope.result = "Enter the numbers and click calculate";
  $scope.submit = function (op) {
    console.log("clicked", op);
    switch (op) {
      case "+":
        $scope.result = $scope.num1 + $scope.num2;
        break;
      case "x":
        $scope.result = $scope.num1 * $scope.num2;
        break;
      case "/":
        $scope.result = $scope.num1 / $scope.num2;
        break;
      case "-":
        $scope.result = $scope.num1 - $scope.num2;
        break;
      default:
        $scope.result = "Select an operator and then click calculate";
    }
  };
});
