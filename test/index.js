var pipe2 = require('../');
var assert = require('assert');


describe('pipe2 extension', function() {
    it('should call pipe2', function(done) {
        pipe2(function(err, rfd, wfd) {
            assert.equal(err, undefined);
            assert.ok(rfd >= 0);
            assert.ok(wfd >= 0);
            assert.ok(wfd === rfd + 1);
            done();
        });
    });
});
