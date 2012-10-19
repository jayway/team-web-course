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
        $('img').data(attribute, value);
    };

    // Appends an element to list
    // The value sent in must be wrapped in an li.
    exports.appendElementToList = function(list, value) {
        $(list).append('<li>' + value + '</li>');
    };

    // Inserts an element first in the list
    // The value sent in must be wrapped in an li.
    exports.insertElementFirst = function(list, value) {
        $('<li>' + value + '</li>').insertBefore(list + ' li:first');
    };

    // Removes all elements
    // The value sent in must be wrapped in an li.
    exports.removeElements = function(list) {
        $(list).empty();
    };

    // Removes the first element of the list
    // The value sent in must be wrapped in an li.
    exports.removeFirst = function(list) {
        $(list).children().first().remove();
    };

}(window));

