$(function(exports) {
    "use strict";

    // If you want to see what happens to the DOM
    // add a breakpoint in afterEach in the test.

    // $.get Request
    // Gets the root resource of the tapir site
    // Call callback on success
    // http://tapirs.herokuapp.com/
    exports.getRootFromTapirs = function(callback) {
        $.get('http://tapirs.herokuapp.com/', callback);
    };

    // $.get Request with parameters
    // Gets the root resource of the tapir site
    // http://tapirs.herokuapp.com/facts
    // Parameter: search
    // Call callback on success
    exports.getFacts = function(search, callback) {
        $.get('http://tapirs.herokuapp.com/facts', {search: search}, callback);
    };

    // $.ajax Request with parameters
    // Gets the root resource of the tapir site
    // http://tapirs.herokuapp.com/facts
    // Parameter: search
    // Call callback on success
    exports.getFactsAjax = function(search, callback) {
        $.ajax({
            url: 'http://tapirs.herokuapp.com/facts',
            data: {search: search},
            success:  callback
        });
    };



}(window));

