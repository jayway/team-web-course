$(function(exports) {
    "use strict";
    
    // If you want to see what happens to the DOM
    // add a breakpoint in afterEach in the test.

    // Sets the value of all text fields to value
    exports.setTextFieldValue = function(value) {
        $(':text').val(value);
    };

    // Gets the value of the first textfield
    exports.getTextFieldValue = function() {
        return $(':text').val();
    };

    // Sets the value of a select
    exports.setSelectValue = function(value) {
        $(':selected').val(value);
    };

    // Gets the value of the first select
    exports.getSelectValue = function() {
        return $(':selected').val();
    };

}(window));

