
const {expect} = require('chai');
// const sinon = require('sinon');

const sut = require('./number.js');
const {Context} = require('./context.js');

describe('src/number.js', function(){
	describe('::randomFactory', function(){
		it('should return a value in a default range', function(){
			const fn = sut.randomFactory({});

			expect(fn).to.be.a('function');
				
			for(let i = 0, c = 100; i < c; i++){
				const value = fn();

				expect(value >= 0).to.equal(true);
				expect(value <= 10).to.equal(true);
			}
		});

		it('should return a value in a range', function(){
			const fn = sut.randomFactory({
				range: {
					min: 5,
					max: 15
				}
			});

			expect(fn).to.be.a('function');
				
			for(let i = 0, c = 100; i < c; i++){
				const value = fn();

				expect(value >= 5).to.equal(true);
				expect(value <= 15).to.equal(true);
			}
		});
	});

	describe('::seriesFactory', function(){
		it('should return a number value', function(){
			const context = new Context({
				series: {
					foo: {
						start: 0,
						step: 3
					}
				}
			});

			const fn = sut.seriesFactory({
				series: 'foo'
			});

			expect(fn(context)).to.equal(0);
			expect(fn(context)).to.equal(3);
			expect(fn(context)).to.equal(6);
		});
	});
});
