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

    describe('Find by id', function() {
        it('Find the element with id="markup"', function() {
            var actual = findElementWithIdMarkup();
            expect(actual.attr('id')).to.equal('markup');
            expect(actual.parent()[0].tagName).to.equal('BODY');
        });
    });

    describe('Sub selection, find by element', function() {
        it("finds 11 li's with class animal", function() {
            findLisAndAddClassAnimal();
            var actual = $('li.animal');
            expect(actual.length).to.equal(11);
        });
    });

    describe('Find by class', function() {
        it("finds 2 h1 with class .title", function() {
            findByClassTitleAndRemoveIt();
            var actual = $('#markup h1:not(.title)');
            expect(actual.length).to.equal(2);
        });
    });

    describe('Child selection', function() {
        it("finds 2 top level li's with class animal-group", function() {
            findTopLevelLisAndAddClassAnimalGroup();
            var actual = $('li.animal-group');
            expect(actual.length).to.equal(2);
        });
        it("finds 9 child li's with class animal", function() {
            findChildLisAndAddClassAnimal();
            var actual = $('li.animal');
            expect(actual.length).to.equal(9);
        });
    });

    afterEach(function() {
        $('#markup').html(markup);
    });
});
