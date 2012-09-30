$(function(exports) {
    // If you want to see what happens to the DOM
    // add a breakpoint in afterEach in the test.

    // GET Request
    // Gets the root resource of the tapir site
    // http://tapirs.herokuapp.com/
    exports.getRootFromTapirs = function(callback) {
        $.get('http://tapirs.herokuapp.com/', callback);
    };



}(window));

