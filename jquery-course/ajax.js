$(function(exports) {
    // If you want to see what happens to the DOM
    // add a breakpoint in afterEach in the test.

    // GET Request
    // Gets the Google favicone from the http://g.etfv.co
    // http://g.etfv.co/http://www.google.com
    exports.getUserAndersJanmyrFromGithub = function(callback) {
        $.get('http://g.etfv.co/http://www.google.com', callback);
    };

}(window));

