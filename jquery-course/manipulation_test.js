describe('Manipulation', function() {
    var markup;
    beforeEach(function() {
        markup = $('#markup').html();
    });

    describe('Form Values', function () {
        it('sets the text field value to tapir', function() {
            setTextFieldValue('tapir');
            var value = $('input:text').val();
            expect(value).to.equal('tapir');
        });

    
        it('gets the text field value', function() {
            $('input:text').val('aardvark');
            var value = getTextFieldValue();
            expect(value).to.equal('aardvark');
        });

        it('sets the select value to sloth', function() {
            setSelectValue('sloth');
            var value = $(':selected').val();
            expect(value).to.equal('sloth');
        });

    
        it('gets the select value', function() {
            $(':selected').val('aardvark');
            var value = getSelectValue();
            expect(value).to.equal('aardvark');
        });
    });

    afterEach(function() {
        // $('#markup').html(markup);
    });
});
