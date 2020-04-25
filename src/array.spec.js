
const {expect} = require('chai');
// const sinon = require('sinon');

const sut = require('./array.js');
const {Context} =  require('./context.js');
const {Manager} =  require('./manager.js');

describe('src/object.js', function(){
	const manager = new Manager({
		string: require('./string.js'),
		number: require('./number.js')
	});

	describe('::objectFactory', function(){
		it('should generate an array', function(){
			const fn = sut.arrayFactory([{
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
				generator: 'number.seriesFactory',
				settings: {
					series: 'blh'
				}
			}, {
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

			let arr = fn(context);

			expect(arr[0])
			.to.be.a('string');

			expect(arr[1])
			.to.equal(0);

			expect(arr[2])
			.to.equal(3);

			arr = fn(context);

			expect(arr[0])
			.to.be.a('string');

			expect(arr[1])
			.to.equal(6);

			expect(arr[2])
			.to.equal(9);
		});
	});
});
