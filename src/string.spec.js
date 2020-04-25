
const {expect} = require('chai');
// const sinon = require('sinon');

const sut = require('./string.js');

describe('src/string.js', function(){
	describe('::charFactory', function(){
		it('should return a boolean value', function(){
			const fn = sut.charFactory({
				charSet: 'abcdefghijklmnop'
			});

			expect(fn).to.be.a('function');

			expect(fn()).to.be.a('string');

			for(let i = 0, c = 100; i < c; i++){
				const char = fn().charCodeAt(0);

				expect(char >= 97).to.equal(true);
				expect(char <= 112).to.equal(true);
			}
		});
	});

	describe('::stringFactory', function(){
		it('should return a boolean value', function(){
			const fn = sut.stringFactory({
				charSet: 'abcdefghijklmnop',
				string: {
					min: 8,
					max: 8
				}
			});

			expect(fn).to.be.a('function');

			expect(fn()).to.be.a('string');

			expect(fn().length).to.equal(8);

			const str = fn();
			for(let i = 0, c = str.length; i < c; i++){
				const char = str[i].charCodeAt(0);

				expect(char >= 97).to.equal(true);
				expect(char <= 112).to.equal(true);
			}
		});
	});

	describe('::sentenceFactory', function(){
		it('should return a boolean value', function(){
			const fn = sut.sentenceFactory({
				charSet: 'abcdefghijklmnop',
				string: {
					min: 8,
					max: 8
				},
				sentence: {
					min: 3,
					max: 3
				},
				join: ','
			});

			expect(fn).to.be.a('function');

			expect(fn()).to.be.a('string');

			expect(fn().split(',').length).to.equal(3);
		});
	});
});
