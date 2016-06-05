/// <reference path="../lib/jasmine-2.4.1/jasmine.js" />
/// <reference path="../lib/jasmine-2.4.1/boot.js" />
/// <reference path="../lib/angular/angular-mocks.js" />

describe("Hello Angular Tests", function() {
    describe("myCtrl title tests", function() {
        it("should initialize title in the scope", function () {

            module("myApp");
            var scope = {};
            var ctrl;

            inject(function($controller) {
                ctrl = $controller("myCtrl", { $scope: scope });
            })
            expect(scope.title).toBeDefined();
            expect(scope.title).toEqual("Hello World");
        })
    })
})