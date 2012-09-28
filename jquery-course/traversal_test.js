describe('Traversal', function() {
    var markup;
    beforeEach(function() {
        markup = $('#markup').html();
        sinon.spy($, "find");
    });

    it("Finds the ul and then the li's using find()", function() {
        var actual = findUlThenLisWithFind();
        expect($.find.calledWith("li")).to.be.true;
        var actualLis = actual.filter("li");
        expect(actualLis.length).to.be.above(0);
        expect(actualLis.length).to.be.equal(actual.length);
    });

    afterEach(function() {
        $.find.restore();
        $('#markup').html(markup);
    });
});
