describe("jscourse.StringCalculator", function() {

 var StringCalculator = jscourse.StringCalculator;

  describe("when an empty string is passed in", function() {
    it("returns 0", function() {
      var result = StringCalculator.add("");
      expect(result).to.equal(0);
    });
  });

  describe("when nothing is passed in", function() {
    it("returns 0", function() {
      var result = StringCalculator.add();
      expect(result).to.equal(0);
    });
  });

  describe("when a number is passed in", function() {
    it("returns the number", function() {
      var result = StringCalculator.add("2");
      expect(result).to.equal(2);
    });
  });

  describe("when a not a number string is passed in", function() {
    it("returns NaN", function() {
      var result = StringCalculator.add("a");
      console.log(result);
      expect(result).to.not.be.undefined;
      expect(result).to.not.be.null;
      expect(result).to.satisfy(function NaN(num) { return isNaN(num); },
                                'expected NaN');
    });
  });

  describe("when '1,2' is passed in", function() {
    it("returns 3", function() {
      var result = StringCalculator.add("1,2");
      expect(result).to.equal(3);
    });
  });
});
