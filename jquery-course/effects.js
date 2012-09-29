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

    // Fades out the ul containing animals
    exports.fadeOutTheAnimals = function() {
        $('#markup ul').fadeOut();
    };

    // Fades in the div with id 'surprise'
    exports.fadeInTheSurprise = function() {
        $('#surprise').fadeIn();
    };



}(window));

