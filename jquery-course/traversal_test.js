describe('Traversal', function() {
    var markup;
    beforeEach(function() {
        markup = $('#markup').html();
    });

    describe("Using find()", function () {
        beforeEach(function() {
            sinon.spy($, "find");
        });

        it("Finds the ul and then the li's, using find()", function() {
            var actual = findUlThenLisUsingFind();
            expect($.find.calledWith("li")).to.be.true;
            var actualLis = actual.filter("li");
            expect(actualLis.length).to.be.above(0);
            expect(actualLis.length).to.be.equal(actual.length);
        });

        it("Finds the ul and then the h1's, using find()", function() {
            var actual = findUlThenH1sUsingFind();
            expect($.find.calledWith("h1")).to.be.true;
            var actualLis = actual.filter("h1");
            expect(actualLis.length).to.be.above(0);
            expect(actualLis.length).to.be.equal(actual.length);
        });

        afterEach(function() {
            $.find.restore();
        });
    });

    afterEach(function() {
        $('#markup').html(markup);
    });
});
