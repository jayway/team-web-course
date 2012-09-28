$(function(exports) {
    // If you want to see what happens to the DOM
    // add a breakpoint in afterEach in the test.

    // ID Selection, find the element with id markup and return it.
    exports.findElementWithIdMarkup = function() {
        return $('#markup');
    };

    // Sub selection, find the li elements below the markup id
    // and add class animal
    exports.findLisAndAddClassAnimal = function() {
        $('#markup li').addClass('animal');
    };

    // Child selection, find the top level li elements below the markup id
    // and add class animal-group
    exports.findTopLevelLisAndAddClassAnimalGroup = function() {
        $('#markup > ul > li').addClass('animal-group');
    };


}(window));

