describe('problem set 2', function() {
  describe("firstReverse", function () {
    it('should take a string and reverse it', function() {
      expect(firstReverse("Hi There!").toBe("!erehT iH"));
    });
  });

  describe("swapCase", function () {
    it("should toggle the cases of a string", function () {
      expect(swapCase("Hello World").toBe("hELLO wORLD"));
    });
  });

  describe("letterCount", function () {
    it("should return the first word with the greatest number of repeated letters", function () {
      expect(letterCount('Today, is the greatest day ever!' ).toBe('greatest'));
    });
  });
});
