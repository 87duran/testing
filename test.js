/* CUSTOM CODE */
var $scope = angular.element('.column.small-12.ng-binding.ng-scope').scope();
$scope.data.displayInterestRate = "3.50";
$scope.data.interestRate = 3.50;
$scope.calculateMonthlyRate();
$scope.$apply();
