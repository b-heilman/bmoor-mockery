
const {expect} = require('chai');
// const sinon = require('sinon');

const sut = require('./object.js');
const {Context} =  require('./context.js');
const {Manager} =  require('./manager.js');

describe('src/object.js', function(){
	const manager = new Manager({
		string: require('./string.js'),
		number: require('./number.js')
	});

	describe('::objectFactory', function(){
		it('should generate an object', function(){
			const fn = sut.objectFactory([{
				path: 'foo.bar',
				generator: 'string.sentenceFactory',
				settings: {
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
				}
			}, {
				path: 'hello',
				generator: 'number.seriesFactory',
				settings: {
					series: 'blh'
				}
			}, {
				path: 'world',
				generator: 'number.seriesFactory',
				settings: {
					series: 'blh'
				}
			}], manager);

			expect(fn).to.be.a('function');

			const context = new Context({
				series: {
					blh: {
						start: 0,
						step: 3
					}
				}
			});

			let obj = fn(context);

			expect(obj.foo.bar)
			.to.be.a('string');

			expect(obj.hello)
			.to.equal(0);

			expect(obj.world)
			.to.equal(3);

			obj = fn(context);

			expect(obj.foo.bar)
			.to.be.a('string');

			expect(obj.hello)
			.to.equal(6);

			expect(obj.world)
			.to.equal(9);
		});
	});
});
