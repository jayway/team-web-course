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

        it('gets the select value', function() {
            $(':selected').val('aardvark');
            var value = getSelectValue();
            expect(value).to.equal('aardvark');
        });

        describe('Form Submission', function() {
            beforeEach(function() {
                $(':text').val('platypus');
                $(':password').val('dingo');
                $(':selected').val('tapir');
                $('textarea').val('okapi');
            });

            it('serializes the form as a query string', function() {
                var queryString = getFormQueryString();
                var expected = 'name=platypus&pwd=dingo&choice=tapir&area=okapi';
                expect(queryString).to.equal(expected);
            });

            it('serializes the form as an array', function() {
                var valueArray = getFormArray();
                console.log(valueArray);
                expect(valueArray).to.deep.equal(
                    [
                        { name: 'name', value: 'platypus'},
                        { name: 'pwd', value: 'dingo'},
                        { name: 'choice', value: 'tapir'},
                        { name: 'area', value: 'okapi'}
                ]);
            });
        });
    });

    afterEach(function() {
        // $('#markup').html(markup);
    });
});
