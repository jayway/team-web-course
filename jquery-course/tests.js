describe('Santity test', function() {
    it('works properly', function() {
        expect(true).to.equal(true);
    })
});

describe('Intro', function() {
    describe('Selectors', function() {
        it("finds 5 li's and adds class items", function() {
            findFiveLisAndAddClassAnimal();
            var actual = $('.animal');
            expect(actual.length).to.equal(5);
        })
    });
    describe('Effects', function() {
    });
    describe('Manipulation', function() {
    });
    describe('Traversal', function() {
    });
    describe('Events', function() {
    });
    describe('Ajax', function() {
    });
});
