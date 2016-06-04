describe("calculator", function () {

    beforeEach(function () {
        Calculator.current = 0;
    });

    it("should have current value all times", function () {
        expect(Calculator.current).toBeDefined();
    });

    it("should add numbers first time", function () {
        expect(Calculator.add(5)).toEqual(5);
    });

    it("should add numbers again correctly", function () {
        expect(Calculator.add(5)).toEqual(5);
        expect(Calculator.add(5)).toEqual(10);
    })
});