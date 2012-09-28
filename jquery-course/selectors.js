$(function(exports) {
    // If you want to see what happens to the DOM
    // add a breakpoint in afterEach in the test.

    // Find an the element with id markup and return it.
    exports.findElementWithIdMarkup = function() {
        return $('#markup');
    };

    // Find the li elements below the markup id.
    exports.findFiveLisAndAddClassAnimal = function() {
        $('#markup li').addClass('animal');
    };


}(window));

