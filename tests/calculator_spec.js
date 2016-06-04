describe("calculator", function () {

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
});