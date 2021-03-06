﻿describe("calculator", function () {

    beforeEach(function () {
        Calculator.current = 0;
    });

    describe("when adding numbers", function () {

        it("should have current value all times", function () {
            expect(Calculator.current).toBeDefined();
        });

        it("should add numbers first time", function () {
            expect(Calculator.add(5)).toEqual(5);
        });

        it("should add numbers again correctly", function () {
            expect(Calculator.add(5)).toEqual(5);
            expect(Calculator.add(5)).toEqual(10);
        });

        it("should add multiple numbers correctly", function () {
            expect(Calculator.add(1, 5)).toEqual(6);
            expect(Calculator.add(5, 10, 29)).toEqual(50);
        });
    });

    describe("when subtracting numbers", function () {

        it("should subtract numbers first time", function () {
            expect(Calculator.subtract(5)).toEqual(-5);
        });

        it("should subtract numbers again correctly", function () {
            expect(Calculator.subtract(5)).toEqual(-5);
            expect(Calculator.subtract(5)).toEqual(-10);
        });

        it("should subtract multiple numbers correctly", function () {
            expect(Calculator.subtract(1, 5)).toEqual(-6);
            expect(Calculator.subtract(5, 10, 29)).toEqual(-50);
        });
    });

    describe("when reset current", function () {

        it("should reset current when called", function () {
            Calculator.current = 20;
            Calculator.reset();
            expect(Calculator.current).toEqual(0);
        });

        it("integration test: should reset current when called", function () {
            Calculator.add(5);
            Calculator.subtract(10, 29);
            Calculator.reset();
            expect(Calculator.current).toEqual(0);
        });

    });

});