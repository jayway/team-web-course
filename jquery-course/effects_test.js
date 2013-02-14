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

        it("Fades out the ul containing animals", function(done) {
            expect($("#markup ul:first").is(":visible")).to.be.true;

            fadeOutTheAnimals();

            var $ul = $("#markup ul:first");
            expect($ul.is(":visible")).to.be.true;
            $ul.promise().done(function() {
                expect($ul.is(":visible")).to.be.false;
                done();
            });

        });

        it("Fades in the div with id 'surprise'", function(done) {
            expect($("#surprise").is(":visible")).to.be.false;
            fadeInTheSurprise();

            var $surprise = $("#surprise");
            var startMillis = Date.now();
            $surprise.promise().done(function() {
                var finishedMillis = Date.now();
                expect($surprise.is(":visible")).to.be.true;
                expect(finishedMillis - startMillis).to.be.above(150);
                done();
            });

        });

    });

    afterEach(function() {
        $('#markup').empty();
    });
});
