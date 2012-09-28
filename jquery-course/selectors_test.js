describe('Intro', function() {
    it('works properly', function() {
        expect(true).to.equal(true);
    })
});

describe('Selectors', function() {
    var markup;
    beforeEach(function() {
        markup = $('#markup').html();
    });

    it('Find the element with id="markup"', function() {
        var actual = findElementWithIdMarkup();
        expect(actual.attr('id')).to.equal('markup');
        expect(actual.parent()[0].tagName).to.equal('BODY');
    });

    it("finds 5 li's with class animal", function() {
        findFiveLisAndAddClassAnimal();
        var actual = $('li.animal');
        expect(actual.length).to.equal(5);
    })

    afterEach(function() {
        $('#markup').html(markup);
    });
});
