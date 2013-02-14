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
            var actual = $('#markup li.animal');
            expect(actual.length).to.equal(11);
        });
    });

    describe('Find by class', function() {
        it("finds 2 headings with class .title", function() {
            findByClassTitleAndRemoveIt();
            var actual = $('#markup :header:not(.title)');
            expect(actual.length).to.equal(2);
        });
    });

    describe('Child selection', function() {
        it("finds 2 top level li's with class animal-group", function() {
            findTopLevelLisAndAddClassAnimalGroup();
            var actual = $('#markup li.animal-group');
            expect(actual.length).to.equal(2);
        });
        it("finds 9 child li's with class animal", function() {
            findChildLisAndAddClassAnimal();
            var actual = $('#markup li.animal');
            expect(actual.length).to.equal(9);
        });
    });

    describe('Or Selection', function() {
        it("finds all h1's and h2's with class selected", function() {
            findH1sAndH2sAndAddSelected();
            var actual = $('#markup .selected');
            expect(actual.length).to.equal(2);
        });
    });

    describe('Filter selection', function() {
        it("finds even li's inside li's and add class even", function() {
            findEvenLisInsideLisAndAddClassEven();
            var actual = $('#markup .even');
            expect(actual.length).to.equal(5);
        });

        it("finds the first li's inside li's and add class first", function() {
            findFirstLisInsideLisAndAddClassFirst();
            var actual = $('#markup .first');
            expect(actual.length).to.equal(2);
        });
    });

    describe('Form Selection', function() {
        it("finds all input elements and adds class highlight", function() {
            findAllInputElementsAndAddClassHighlight();
            var actual = $('#markup .highlight');
            expect(actual.length).to.equal(8);
        });

        it("finds all buttons", function() {
            findAllButtonsAndAddClassHighlight();
            var actual = $('#markup .highlight');
            expect(actual.length).to.equal(2);
        });
    });

    afterEach(function() {
        $('#markup').empty();
    });
});
