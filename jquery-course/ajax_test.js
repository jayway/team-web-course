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
            getFacts('swim', function(list) {
                expect(list).to.have.length(1);
                done();
            });
        });

        it('calls a service with parameters with $.ajax', function(done) {
            var getSpy = sinon.spy($, 'get');
            var ajaxSpy = sinon.spy($, 'ajax');
            getFactsAjax('mate', function(list) {
                expect(list).to.have.length(2);
                expect(getSpy).to.not.have.been.called;
                expect(ajaxSpy).to.have.been.called;
                done();
            });
        });
    });

    describe('POST', function() {
        it('calls a service with parameters');
        it('calls a service with parameters');
    });

    describe('Ajax', function() {
        it('calls a service with parameters');
        it('calls a service with parameters');
    });



    afterEach(function() {
        $('#markup').html(markup);
    });
});
