describe('Manipulation', function() {
    var markup;
    beforeEach(function() {
        markup = $('#markup').html();
    });

    describe('Attributes', function () {
        it('changes the src attribute of the image', function() {
            changeSrcAttributeOfImage('images/tapir.png');
            expect($('img').attr('src')).to.equal('images/tapir.png');
        });

        it('gets the src attribute of the image', function() {
            var val = getAttributeOfImage('src');
            expect(val).to.equal('images/stupid.jpg');
        });
    });

    describe('HTML', function() {
    });

    afterEach(function() {
        $('#markup').html(markup);
    });
});
