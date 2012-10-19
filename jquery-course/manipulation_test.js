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

    describe('Data Attributes', function () {
        it('gets the data-style attribute from img', function() {
            var style = getDataAttributeOfImage('style');
            expect(style).to.equal('cool');
        });

        it('sets the data-style attribute of the image', function() {
            setDataAttributeOfImage('style', 'smooth');
            var data = $('img').data('style');
            var val = $('img').attr('data-style');
            expect(data).to.equal('smooth');
            expect(val).to.equal('cool');
        });
    });

    describe('HTML', function() {
    });

    afterEach(function() {
        $('#markup').html(markup);
    });
});
