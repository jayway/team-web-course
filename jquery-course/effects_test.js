describe('Effects', function() {
    var markup;
    beforeEach(function() {
        markup = $('#markup').html();
    });

    describe("Hiding and showing", function () {
        it("Hides the ul containing animals", function() {
            expect($("#markup ul:first").is(":visible")).to.be.true;
            hideTheAnimals();
            expect($("#markup ul:first").is(":visible")).to.be.false;
        });

        it("Shows the div with id 'surprise'", function() {
            expect($("#surprise").is(":visible")).to.be.false;
            showTheSurprise();
            expect($("#surprise").is(":visible")).to.be.true;
        });
    });

    afterEach(function() {
        $('#markup').html(markup);
    });
});
