/// <reference path="../lib/angular/angular.js" />

var myApp = angular.module("Calculator", []);

myApp.controller("CalculatorController", function ($scope) {
    $scope.Current = 0;

    $scope.Reset = function () {
        $scope.Current = 0;
        $scope.TextInput = "0";
    }

    $scope.Add = function () {
        $scope.Current += parseFloat($scope.TextInput);
    }
});