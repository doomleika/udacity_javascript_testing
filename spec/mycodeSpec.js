describe("MyTest", function() {
    var func = require('../mycode.js');
    it('returns true', function() {
        expect(func()).toBe(true);
    });
})