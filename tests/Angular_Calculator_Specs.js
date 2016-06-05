/// <reference path="../lib/jasmine-2.4.1/jasmine.js" />
/// <reference path="../lib/jasmine-2.4.1/boot.js" />
/// <reference path="../lib/angular/angular-mocks.js" />

describe("Angular Calculator", function () {

    //beforeEach(function () {
    //    Calculator.current = 0;
    //});

    describe("when adding numbers", function () {

        it("should have current value all times", function () {

            module("Calculator");

            var scope = {};
            var calc_controller;

            inject(function($controller) {
                calc_controller = $controller("CalculatorController", { $scope: scope });
            })

            expect(scope.Current).toBeDefined();
        });

        it("should add numbers first time", function () {

            module("Calculator");

            var scope = {};
            var calc_controller;

            inject(function ($controller) {
                calc_controller = $controller("CalculatorController", { $scope: scope });
            })

            scope.TextInput = "5"
            scope.Add();
            expect(scope.Current).toEqual(5);

            scope.TextInput = "15"
            scope.Add();
            expect(scope.Current).toEqual(20);
        });
    });

});