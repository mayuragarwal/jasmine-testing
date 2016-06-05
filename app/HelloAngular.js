/// <reference path="../lib/angular/angular.js" />

var myApp = angular.module("myApp", []);

myApp.controller("myCtrl", function ($scope) {
    $scope.title = "Hello World"
});