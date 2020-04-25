
const {expect} = require('chai');
// const sinon = require('sinon');

const sut = require('./boolean.js');

describe('src/boolean.js', function(){
	describe('::randomFactory', function(){
		it('should return a boolean value', function(){
			const fn = sut.randomFactory();

			expect(fn).to.be.a('function');

			expect(fn()).to.be.a('boolean');
		});
	});
});
