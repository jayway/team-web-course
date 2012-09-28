$(function(exports) {
    // If you want to see what happens to the DOM
    // add a breakpoint in afterEach in the test.

    // Finds (at least) one ul and then the li's underneath, using find()
    exports.findUlThenLisWithFind = function() {
        return $('#markup ul').find("li");
    };

    // Finds (at least) one ul and then the h1's underneath, using find()
    exports.findUlThenH1sWithFind = function() {
        return $('#markup ul').find("h1");
    };



}(window));

