$(function(exports) {
    "use strict";

    // $.get Request
    // Gets the root resource of the tapir site
    // Call callback on success
    // http://tapirs.herokuapp.com/
    exports.getRootFromTapirs = function(callback) {
    };

    // $.get Request with parameters
    // Gets the matching facts from the server
    // http://tapirs.herokuapp.com/facts
    // Parameter: search
    // Call callback on success
    exports.getFacts = function(search, callback) {
    };

    // $.ajax Request with parameters
    // Gets the matching facts from the server
    // http://tapirs.herokuapp.com/facts
    // Parameter: search
    // Call callback on success
    exports.getFactsAjax = function(search, callback) {
    };

    // $.ajax Request to a failing service
    // Tries to get a missing resource
    // http://tapirs.herokuapp.com/missing
    // Call callback on error
    exports.getMissing = function(callback) {
    };


    // $.post Request with parameters
    // Adds a new fact to the service
    // http://tapirs.herokuapp.com/facts
    // Parameter: fact
    // Call callback on success
    exports.addFact = function(fact, callback) {
    };

    // $.ajax Request with parameters
    // Adds a new fact to the service
    // http://tapirs.herokuapp.com/facts
    // Parameter: fact
    // Call callback on success
    exports.addFactAjax = function(fact, callback) {
    };

    // $.ajax Request with parameters
    // Updates an existing fact on the server
    // http://tapirs.herokuapp.com/facts
    // Parameter: id, fact
    // Call callback on success
    exports.updateFact = function(id, fact, callback) {
    };


    // $.get Request a fact by id
    // Gets an existing fact from the server
    // http://tapirs.herokuapp.com/facts/:id
    // Returns the deferred object.
    exports.getFact = function(id, callback) {
    };

    // $.get Request a fact by id, twice
    // $.when to bundle up the requests
    // Gets two existing fact from the server
    // http://tapirs.herokuapp.com/facts/:id
    // Returns the deferred object.
    exports.getTwoFacts = function(id1, id2, callback) {
    };


}(window));

