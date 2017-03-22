const expect = require("chai").expect;

let levenshtein = require("../src/levenshtein");

describe("A series of test for finding the similarity ", function(err) {
    it("should return 0 as the sentences are same", function(done) {
        var result = levenshtein('This sentence is the same','This sentence is the same');
        expect(result).to.be.equal(0);
        done();
    });
    it("should return 6 as there are 6 insertions", function(done) {
        var result = levenshtein('Javascript','Java');
        expect(result).to.be.equal(6);
        done();
    });
    it("should return -1 as there is no valid sentences", function(done) {
        var result = levenshtein('','');
        expect(result).to.be.equal(-1);
        done();
    });
    it("should return -1 as there is no valid sentence", function(done) {
        var result = levenshtein('a word','');
        expect(result).to.be.equal(-1);
        done();
    });
  });
