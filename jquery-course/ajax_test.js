describe('Ajax', function() {
    var markup;
    beforeEach(function() {
        markup = $('#markup').html();
    });

    describe('GET', function() {
        it('gets the json from the github api', function(done) {
            $.get('http://api.github.com/users/andersjanmyr', function() {
                console.log(arguments);
            });
        });
    });

    afterEach(function() {
        $('#markup').html(markup);
    });
});
