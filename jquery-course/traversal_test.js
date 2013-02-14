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

    describe("Using parent()", function () {

        it("Finds h2's parent li, using parent()", function() {
            var actual = findParentOfH2UsingParent();
            var expected = $("#markup h2").parent();
            var actualHtmlElement = actual.get(0);
            var expectedHtmlElement = expected.get(0);
            expect(actualHtmlElement).to.equal(expectedHtmlElement);
        });

    });

    describe("Using parents()", function () {

        it("Finds the .card which has a span in its .card-footer, using parents()", function() {
            var actual = findCardWithSpanInCardFooterUsingParents();
            var expected = $('#markup .card:last');
            var actualHtmlElement = actual.get(0);
            var expectedHtmlElement = expected.get(0);
            expect(actualHtmlElement).to.equal(expectedHtmlElement);
        });

    });

    afterEach(function() {
        $('#markup').empty();
    });
});
