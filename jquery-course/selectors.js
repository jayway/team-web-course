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
        $('#markup h1, #markup h2 ').addClass('selected');
    };

    // Filter selection
    // Find even li's inside other li's below the markup id
    // and add class even
    exports.findEvenLisInsideLisAndAddClassEven = function() {
        $('#markup li li:even').addClass('even');
    };

    // Filter selection
    // Find the first li's inside other li's below the markup id
    // and add class first
    exports.findFirstLisInsideLisAndAddClassFirst = function() {
        $('#markup li li:first-child').addClass('first');
    };


    // Form selection
    // Find all input elements 
    // and add class highlight
    exports.findAllInputElementsAndAddClassHighlight = function() {
        $('#markup :input').addClass('highlight');
    };

    // Form selection
    // Find all buttons
    // and add class highlight
    exports.findAllButtonsAndAddClassHighlight = function() {
        $('#markup :button, input[type="submit"]').addClass('highlight');
    };
}(window));

