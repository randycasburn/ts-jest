const testStrs = require('../src/base');

describe("simple test", () => {
    it("change the string", () => {
        testStrs.setString("This is the new string");
        expect(testStrs.getString()).toBe("This is the new string");
    })
})
