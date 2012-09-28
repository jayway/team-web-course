describe('Ajax', function() {
    var markup;
    beforeEach(function() {
        markup = $('#markup').html();
    });

    describe('GET', function() {
        it('gets the google favicon from the g.etfv.co api', function(done) {
            getUserAndersJanmyrFromGithub(function(icon) {
                done();
            });
        });

        it('calls a service with parameters');

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
