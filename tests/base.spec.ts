import { setString, getString } from '../src/base.js';

describe("simple test", () => {
    it("change the string", () => {
        setString("This is the new string");
        expect(getString()).toBe("This is the new string");
    })
})
