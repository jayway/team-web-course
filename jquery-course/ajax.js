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
    // Gets the matching facts from the server
    // http://tapirs.herokuapp.com/facts
    // Parameter: search
    // Call callback on success
    exports.getFacts = function(search, callback) {
        $.get('http://tapirs.herokuapp.com/facts', {search: search}, callback);
    };

    // $.ajax Request with parameters
    // Gets the matching facts from the server
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

    // $.ajax Request to a failing service
    // Tries to get a missing resource
    // http://tapirs.herokuapp.com/facts
    // Call callback on error
    exports.getMissing = function(callback) {
        $.ajax({
            url: 'http://tapirs.herokuapp.com/missing',
            error:  callback
        });
    };


    // $.post Request with parameters
    // Adds a new fact to the service
    // http://tapirs.herokuapp.com/facts
    // Parameter: fact
    // Call callback on success
    exports.addFact = function(fact, callback) {
        $.post('http://tapirs.herokuapp.com/facts', {fact: fact}, callback);
    };

    // $.ajax Request with parameters
    // Adds a new fact to the service
    // http://tapirs.herokuapp.com/facts
    // Parameter: fact
    // Call callback on success
    exports.addFactAjax = function(fact, callback) {
        $.ajax({
            type: 'POST',
            url: 'http://tapirs.herokuapp.com/facts',
            data: {fact: fact},
            success: callback
        });
    };

    // $.ajax Request with parameters
    // Updates an existing fact on the server
    // http://tapirs.herokuapp.com/facts
    // Parameter: id, fact
    // Call callback on success
    exports.updateFact = function(id, fact, callback) {
        $.ajax({
            type: 'PUT',
            url: 'http://tapirs.herokuapp.com/facts/' + id,
            data: {fact: fact},
            success: callback
        });
    };


}(window));

