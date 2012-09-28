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

    it("finds 11 li's with class animal", function() {
        findLisAndAddClassAnimal();
        var actual = $('li.animal');
        expect(actual.length).to.equal(11);
    });

    it("finds 2 top levels li's with class animal-group", function() {
        findTopLevelLisAndAddClassAnimalGroup();
        var actual = $('li.animal-group');
        expect(actual.length).to.equal(2);
    });

    afterEach(function() {
        $('#markup').html(markup);
    });
});
