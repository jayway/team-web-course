describe('Events', function() {
    var markup;
    beforeEach(function() {
        markup = $('#markup').html();
        $('#markup button, #markup li').click(function(event) {
          event.preventDefault();
        });
    });

    describe('click', function () {
        beforeEach(function() {
            addClickHandlerToButton();
        });

        it('highlights the button on click', function() {
            $('#markup button').click();
            expect($('#markup button')).to.have.class('highlight');
        });
    });

    describe('mouse', function () {
        beforeEach(function() {
            addMouseOverAndMouseOutToH1();
        });

        it('highlights the h1 on over', function() {
            $('#markup h1:first').mouseover();
            expect($('#markup h1:first')).to.have.class('highlight');
        });
        it('removes highlight from h1 on out', function() {
            $('#markup h1:first').addClass('highlight');
            $('#markup h1:first').mouseout();
            expect($('#markup h1:first')).to.not.have.class('highlight');
        });
    });

    describe('on', function () {

        it('highlights the li on click', function() {
            addClickHandlerToLiWithOn();
            $('#markup li:first').click();
            expect($('#markup li:first')).to.have.class('highlight');
        });

        it('highlights the li on click via ul', function() {
            addClickHandlerToUlForLiWithOn();
            $('#markup li:first').click();
            expect($('#markup li:first')).to.have.class('highlight');
        });
    });

    afterEach(function() {
        $('#markup').empty();
    });
});
