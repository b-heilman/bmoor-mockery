
const {expect} = require('chai');
// const sinon = require('sinon');

const sut = require('./enum.js');
const {Context} = require('./context.js');

describe('src/enum.js', function(){
	describe('::randomFactory', function(){
		it('should return a value in the set', function(){
			const fn = sut.randomFactory({
				enums: ['eins', 'zwei', 'drei']
			});

			expect(fn).to.be.a('function');
				
			for(let i = 0, c = 100; i < c; i++){
				const value = fn();

				expect(value === 'eins' || value === 'zwei' || value === 'drei')
				.to.equal(true);
			}
		});
	});

	describe('::counterFactory', function(){
		it('should return a boolean value', function(){
			const fn = sut.counterFactory({
				enums: ['eins', 'zwei', 'drei']
			});

			expect(fn({counter: 0}))
			.to.equal('eins');
			expect(fn({counter: 1}))
			.to.equal('zwei');
			expect(fn({counter: 2}))
			.to.equal('drei');
			expect(fn({counter: 3}))
			.to.equal('eins');
		});
	});

	describe('::counterFactory', function(){
		it('should return a boolean value', function(){
			const fn = sut.seriesFactory({
				enums: ['eins', 'zwei', 'drei'],
				series: 'foo'
			});

			const context = new Context({
				series: {
					foo: {
						start: 0,
						step: 1
					}
				}
			});

			expect(fn(context))
			.to.equal('eins');
			expect(fn(context))
			.to.equal('zwei');
			expect(fn(context))
			.to.equal('drei');
			expect(fn(context))
			.to.equal('eins');
		});
	});
});
