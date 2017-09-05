var Dog = require("../models/dog");
var expect = require("chai").expect;

describe("Dog", function() {
	var fido;
	before(function () {
		fido = new Dog("Fido", 5);
	});
	describe("new", function() {
		it("initializes a new dog", function() {
      		expect(typeof(fido)).to.equal("object");
		});
	});
 
	describe("name", function() {
		it("allows the reading and writing of a name", function() {
			expect(fido.name).to.equal("Fido");
		});
	});

	describe("hunger", function() {
		it("allows the reading and writing of a hunger level", function() { 
			expect(fido.hungerLevel).to.equal(5);
		});
	});

	describe("eat", function() {
		context("when dog is hungry", function () {
			it("decrements the hunger level when invoked", function() {
				fido.eat();
				expect(fido.hungerLevel).to.equal(4);
			});	
		});
		context("when dog is NOT hungry", function() {
      		it("does NOT decrement the hunger level when invoked", function() {
		        fido.hungerLevel = 0;
		        fido.eat();
		        expect(fido.hungerLevel).to.equal(0);
      		});
    	});  
	});
});