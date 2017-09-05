const expect = require("chai").expect;
const request = require("request");

var responseData;
var bodyData;
var url = ("http://shakeitspeare.com/api/sentence");

describe ("shakes", function () {
	before(function(done) {
		request(url, function(err, response, body){
			responseData = response;
			bodyData = body;
			done();
		});
	});

		it("Should return 200 - OK status code", function(done) {
				expect(responseData.statusCode).to.eq(200);
				done();
		});
		it("Should return a sentence in the body", function(done) {
				if(typeof(bodyData) === "string") {
					bodyData = JSON.parse(bodyData);
				}
				console.log(bodyData);
				expect(bodyData.sentence).to.not.be.empty;
				done();
		});
});