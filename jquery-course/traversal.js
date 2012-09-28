$(function(exports) {
    // If you want to see what happens to the DOM
    // add a breakpoint in afterEach in the test.

    // Finds (at least) one ul and then the li's underneath, using find()
    exports.findUlThenLisUsingFind = function() {
        return $('#markup ul').find("li");
    };

    // Finds (at least) one ul and then the h1's underneath, using find()
    exports.findUlThenH1sUsingFind = function() {
        return $('#markup ul').find("h1");
    };

    // Finds the parent element of the h2, using parent()
    exports.findParentOfH2UsingParent = function() {
        return $('#markup h2').parent();
    };

    // Finds the .card which has a span in its .card-footer, using parents()
    exports.findCardWithSpanInCardFooterUsingParents = function() {
        return $('#markup .card-footer span').parents(".card");
    };



}(window));

