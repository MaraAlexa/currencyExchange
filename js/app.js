
angular.module("currencyExchange", [])
.controller('CurrencyCalculatorController', function ($scope) {

    $scope.currencies = [
      {id: 1, name:'euro', select: 'false'},
      {id: 2, name:'gbp', select: 'false'},
      {id: 3, name:'usd', select: 'false'},
      {id: 4, name:'yen', select: 'false'}
    ];

    $scope.selectedCurrency = "euro";
    $scope.selectedCurrencyOutput = "usd";


    $scope.selectedCurrencyIs = function (item) {

        $scope.selectedCurrency = item;
      


    };


});
