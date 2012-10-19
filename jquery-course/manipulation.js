$(function(exports) {
    "use strict";

    // If you want to see what happens to the DOM
    // add a breakpoint in afterEach in the test.

    // changes the src attribute of the image
    exports.changeSrcAttributeOfImage = function(image) {
        $('img').attr('src', image);
    };

    // Gets a named attribute of image
    exports.getAttributeOfImage = function(attribute) {
        return $('img').attr(attribute);
    };

    // Gets a data attribute of image
    exports.getDataAttributeOfImage = function(attribute) {
        return $('img').data(attribute);
    };

    // Gets a data attribute of image
    exports.setDataAttributeOfImage = function(attribute, value) {
        console.log(arguments);
        $('img').data(attribute, value);
    };
}(window));

