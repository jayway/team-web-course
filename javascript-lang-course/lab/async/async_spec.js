describe('async', function() {
    "use strict";

    describe('parallel', function() {
        describe('calls the tasks in parallel', function() {
            it('calls the callback with the results');
            it('calls the callback with an error if anything fails');
        });

    });

    describe('serial', function() {
        describe('calls the tasks serially', function() {
            it('calls the callback with the results');
            it('calls the callback with an error if anything fails');
        });
    });

    describe('map', function() {
        describe('call the mapFunction once for each item', function() {
            it('calls the callback with the results');
            it('calls the callback with an error if anything fails');
        });
    });
});

