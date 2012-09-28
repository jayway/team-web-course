$(function(exports) {
    // If you want to see what happens to the DOM
    // add a breakpoint in afterEach in the test.

    // Hides the ul containing animals
    exports.hideTheAnimals = function() {
        $('#markup ul').hide();
    };

    // Shows the div with id 'surprise'
    exports.showTheSurprise = function() {
        $('#surprise').show();
    };



}(window));

