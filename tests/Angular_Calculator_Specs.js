/// <reference path="../lib/angular/angular.js" />
/// <reference path="../lib/jasmine-2.4.1/jasmine.js" />
/// <reference path="../lib/jasmine-2.4.1/boot.js" />
/// <reference path="../lib/angular/angular-mocks.js" />

describe("Angular Calculator", function () {

    var scope, calc_controller;

    beforeEach(function () {

        module("Calculator");

        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            calc_controller = $controller("CalculatorController", { $scope: scope });
        })

        scope.current = 0;
    });

    it("should have current value all times", function () {

        expect(scope.Current).toBeDefined();
    });

    describe("when adding numbers", function () {

        it("should add numbers first time", function () {

            scope.TextInput = "5"
            scope.Add();
            expect(scope.Current).toEqual(5);
        });

        it("should add numbers again correctly", function () {

            scope.TextInput = "15"
            scope.Add();
            expect(scope.Current).toEqual(15);

            scope.TextInput = "15.50"
            scope.Add();
            expect(scope.Current).toEqual(30.5);
        });

        it("should add numbers correctly with non zero initial value", function () {

            scope.Current = 20;

            scope.TextInput = "5";
            scope.Add();

            scope.TextInput = "10";
            scope.Add();

            expect(scope.Current).toEqual(35);
        });

    });

    describe("when reset calculator", function () {

        it("should reset current when called", function () {
            scope.Current = 20;
            scope.Reset();
            expect(scope.current).toEqual(0);
        });

        it("should reset text input and current when called", function () {
            scope.TextInput = "5"
            scope.Add();
            scope.Reset();
            expect(scope.Current).toEqual(0);
            expect(scope.TextInput).toEqual("0");
        });

    });

    describe("when subtracting numbers", function () {

        it("should subtract numbers first time", function () {

            scope.TextInput = "5";
            scope.Subtract();
            expect(scope.Current).toEqual(-5);
        });

        it("should subtract numbers again correctly", function () {

            scope.TextInput = "5";
            scope.Subtract();

            scope.TextInput = "10";
            scope.Subtract();

            expect(scope.Current).toEqual(-15);
        });

        it("should subtract numbers correctly with non zero initial value", function () {

            scope.Current = 20;

            scope.TextInput = "5";
            scope.Subtract();

            scope.TextInput = "10";
            scope.Subtract();

            expect(scope.Current).toEqual(5);
        });
    });
});