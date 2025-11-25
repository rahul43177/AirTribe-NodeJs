const { add } = require("./example");

describe("Testing addition of 2 numbers" , () => {
    test("Should add 2 positive numbers" , () => {
        expect(add(2,5)).toBe(7);
    })

    test("Should add 2 negative numbers" , ()=> {
        expect(add(-2 , -5)).toBe(-7)
    })
    test("Adding a string to the number" , () => {
        expect(add("string" , 1)).toBe(null)
    })
    test("adding two numbers" , () => {
        expect(add(1 , 2)).toBe(3)
    })
    test("Should add zero correctly", () => {
        expect(add(0, 5)).toBe(5)
    })
    test("Should add floating point numbers", () => {
        expect(add(1.2, 2.3)).toBeCloseTo(3.5)
    })
    test("Missing second argument returns null", () => {
        expect(add(1)).toBeNull()
    })
    test("NaN input produces NaN result", () => {
        expect(add(NaN, 2)).toBeNaN()
    })
    test("Null and undefined inputs return null", () => {
        expect(add(null, undefined)).toBeNull()
    })
})