$(function(exports) {
    // If you want to see what happens to the DOM
    // add a breakpoint in afterEach in the test.

    // Adds class hightlight to #markup li on click
    exports.addClickHandlerToLi = function() {
        $('#markup li').click(function() {
            $(this).addClass('highlight');
        });
    };



}(window));

