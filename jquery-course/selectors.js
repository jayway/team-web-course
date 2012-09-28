$(function(exports) {
    // If you want to see what happens to the DOM
    // add a breakpoint in afterEach in the test.

    // ID Selection
    // Find the element with id markup and return it.
    exports.findElementWithIdMarkup = function() {
        return $('#markup');
    };

    // Sub selection
    // Find the li elements below the markup id
    // and add class animal
    exports.findLisAndAddClassAnimal = function() {
        $('#markup li').addClass('animal');
    };

    // Find by class title below the markup id
    // and remove the the class
    exports.findByClassTitleAndRemoveIt = function() {
        $('.title').removeClass('title');
    };

    // Child selection
    // Find the top level li elements below the markup id
    // and add class animal-group
    exports.findTopLevelLisAndAddClassAnimalGroup = function() {
        $('#markup > ul > li').addClass('animal-group');
    };

    // Child selection
    // Find the top level li elements below the markup id
    // and add class animal-group
    exports.findChildLisAndAddClassAnimal= function() {
        $('#markup > ul > li > ul > li').addClass('animal');
    };

    // Or selection
    // Find all h1's and h2's below the markup id
    // and add class selected
    exports.findH1sAndH2sAndAddSelected = function() {
        $('#markup ul, #markup h1 ').addClass('selected');
    };

}(window));

