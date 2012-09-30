$(function(exports) {
    // If you want to see what happens to the DOM
    // add a breakpoint in afterEach in the test.

    // GET Request
    // Gets the Google favicone from the Tapirs site
    // http://tapirs.herokuapp.com/
    exports.getRootFromTapirs = function(callback) {
        $.get('http://tapirs.herokuapp.com/', callback);
    };



}(window));

