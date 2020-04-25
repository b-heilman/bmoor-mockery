
const {expect} = require('chai');
// const sinon = require('sinon');

const sut = require('./context.js');

describe('src/context.js', function(){
	describe('::Context', function(){
		let context = null;

		beforeEach(function(){
			context = new sut.Context({
				series: {
					foo: {
						step: 5,
						start: 10
					},
					bar: {}
				}
			});
		});

		describe('::counter', function(){
			it('should work correctly', function(){
				expect(context.counter).to.equal(0);

				context.next();

				expect(context.counter).to.equal(1);

				context.next(2);

				expect(context.counter).to.equal(3);
			});
		});

		describe('::series', function(){
			it('should run a default linear series', function(){
				expect(context.series('bar')).to.equal(0);

				expect(context.series('bar')).to.equal(1);

				expect(context.series('bar')).to.equal(2);
			});

			it('should run a custom linear series', function(){
				expect(context.series('foo')).to.equal(10);

				expect(context.series('foo')).to.equal(15);

				expect(context.series('foo')).to.equal(20);
			});
		});
	});
});
