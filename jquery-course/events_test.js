describe('Events', function() {
    var markup;
    beforeEach(function() {
        markup = $('#markup').html();
    });

    describe('click', function () {
        beforeEach(function() {
            addClickHandlerToLi();
        });

        it('highlights the li on click', function() {
            $('#markup li:first').click();
            expect($('#markup li:first')).to.have.class('highlight');
        });

    });

    afterEach(function() {
        $('#markup').html(markup);
    });
});
