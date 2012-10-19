describe('Ajax', function() {
    "use strict";
    
    var markup;
    beforeEach(function() {
        markup = $('#markup').html();
    });

    describe('GET', function() {
        it('Gets the root resource of the tapirs site with $.get', function(done) {
            getRootFromTapirs(function(text) {
                expect(text).to.equal('Tapirs Rule!');
                done();
            });
        });

        it('calls a service with parameters with $.get', function(done) {
            var getSpy = sinon.spy($, 'get');
            getFacts('swim', function(list) {
                expect(list).to.have.length(1);
                expect(getSpy).to.have.been.called;
                done();
                getSpy.restore();
            });
        });

        it('calls a service with parameters with $.ajax', function(done) {
            var getSpy = sinon.spy($, 'get');
            getFactsAjax('mate', function(list) {
                expect(list).to.have.length(2);
                expect(getSpy).to.not.have.been.called;
                done();
                getSpy.restore();
            });
        });

        it('calls a missing service with $.ajax and gets error', function(done) {
            getMissing(function(jqXhr, status, message) {
                expect(status).to.equal('error');
                expect(message).to.equal('Not Found');
                done();
            });
        });
    });

    describe('POST', function() {
        it('creates a new fact on with $.post', function(done) {
            var spy = sinon.spy($, 'post');
            addFact('A tapir can out manouver a dog', function(id) {
                expect(id).to.be.a.number;
                expect(spy).to.have.been.called;
                done();
                spy.restore();
            });
        });

        it('creates a new fact on with $.ajax', function(done) {
            var spy = sinon.spy($, 'post');
            addFactAjax('A tapir can out manouver a dog', function(id) {
                expect(id).to.be.a.number;
                expect(spy).to.not.have.been.called;
                done();
                spy.restore();
            });
        });
    });

    describe('PUT', function() {
        it('updates a fact with $.ajax', function(done) {
            var id = 1;
            updateFact(id, 'A tapir kid is born after 11-15 months of gestation', function(data) {
                expect(data.id).to.equal(1);
                expect(data.fact).to.equal('A tapir kid is born after 11-15 months of gestation');
                done();
            });

        });
    });

    describe('Deferreds', function() {
        it('calls the done function on the deferred object', function(done) {
            var id = 7;
            var deferred = getFact(id);
            deferred.done(function(data) {
                expect(data.id).to.equal(7);
                expect(data.fact).to.equal('The tapir is very shy.');
                done();
            });
        });

    });

    afterEach(function() {
        $('#markup').html(markup);
    });
});
