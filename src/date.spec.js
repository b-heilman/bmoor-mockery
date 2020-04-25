
const {expect} = require('chai');
// const sinon = require('sinon');

const sut = require('./date.js');

describe('src/date.js', function(){
	const nowS = 1600092852 * 1000;

	describe('::dateFactory', function(){
		it('should return a value without a format', function(){
			const fn = sut.dateFactory({
			});

			expect(fn).to.be.a('function');
				
			expect(fn({now: nowS}))
			.to.deep.equal(new Date(nowS));
		});

		it('should return a value as a ms integer', function(){
			const fn = sut.dateFactory({
				format: 'unix(ms)'
			});

			expect(fn).to.be.a('function');
				
			expect(fn({now: nowS}))
			.to.deep.equal(nowS);
		});

		it('should return a value as a s integer', function(){
			const fn = sut.dateFactory({
				format: 'unix(s)'
			});

			expect(fn).to.be.a('function');
				
			expect(fn({now: nowS}))
			.to.deep.equal(nowS/1000);
		});

		it('should return a value properly formatted string', function(){
			let fn = sut.dateFactory({
				format: 'yyyy-MM-dd H:mm:ss z',
				timeZone: 'Europe/Berlin'
			});

			expect(fn).to.be.a('function');
				
			expect(fn({now: nowS}))
			.to.equal('2020-09-14 16:14:12 GMT+2');

			//---------------
			fn = sut.dateFactory({
				format: 'yyyy-MM-dd H:mm:ss z',
				timeZone: 'America/New_York'
			});

			expect(fn({now: nowS}))
			.to.equal('2020-09-14 10:14:12 EDT');

			//---------------
			fn = sut.dateFactory({
				format: 'yyyy-MM-dd H:mm:ss z',
				timeZone: 'Europe/Paris'
			});

			expect(fn({now: nowS}))
			.to.equal('2020-09-14 16:14:12 GMT+2');

			//---------------
			fn = sut.dateFactory({
				format: 'yyyy-MM-dd H:mm:ss z',
				timeZone: 'Asia/Bangkok'
			});

			expect(fn({now: nowS}))
			.to.equal('2020-09-14 21:14:12 GMT+7');
		});
	});
});
