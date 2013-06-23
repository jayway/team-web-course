$(function(exports) {
    "use strict";

    // $.get Request
    // Gets the status of the tapir site
    // Call callback on success
    // http://tapirs.herokuapp.com/status
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
    // POST http://tapirs.herokuapp.com/facts
    // Parameter: fact
    // Call callback on success
    exports.addFactAjax = function(fact, callback) {
    };

    // $.ajax request with parameters
    // Updates an existing fact on the server
    // PUT http://tapirs.herokuapp.com/facts/:id
    // Parameter: id, fact
    // Call callback on success
    exports.updateFact = function(id, fact, callback) {
    };


    // $.get Request a fact by id
    // Gets an existing fact from the server
    // http://tapirs.herokuapp.com/facts/:id
    // Returns the deferred object.
    exports.getFact = function(id) {
    };

    // $.get Request a fact by id, twice
    // $.when to bundle up the requests
    // Gets two existing fact from the server
    // http://tapirs.herokuapp.com/facts/:id
    // Returns the deferred object for both requests.
    exports.getTwoFacts = function(id1, id2) {
    };


}(window));

