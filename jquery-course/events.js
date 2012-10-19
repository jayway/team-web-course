$(function(exports) {
    // If you want to see what happens to the DOM
    // add a breakpoint in afterEach in the test.

    // Adds class highlight to #markup button on click
    // Make sure you prevent the default action by
    // returning false from the callback or
    // calling event.preventDefault
    exports.addClickHandlerToButton = function() {
        $('#markup button').click(function(event) {
            event.preventDefault();
            $(this).addClass('highlight');
        });
    };


    // Adds class highlight to #markup h1 on mouseover
    // Remove class highlight to #markup h1 on mouseout
    exports.addMouseOverAndMouseOutToH1 = function() {
        $('#markup h1')
            .mouseover(function() {
                $(this).addClass('highlight');
            })
            .mouseout(function() {
                $(this).removeClass('highlight');
            });
    };

    // Adds class highlight to #markup li on click
    // Use the on method instead of the click method
    exports.addClickHandlerToLiWithOn = function() {
        $('#markup li').on('click', function(event) {
            $(this).addClass('highlight');
        });
    };

    // Add a click handler on #markup ul
    // The click handler should add class highlight to the li children
    exports.addClickHandlerToUlForLiWithOn = function() {
        $('#markup ul').on('click', 'li', function(event) {
            $(this).addClass('highlight');
        });
    };


}(window));

