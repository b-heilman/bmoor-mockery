
const characterSet = '#$?<>()"\'\\ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const {randomFactory: numberFactory} = require('./number.js');

function charFactory(settings={}){
	
	const charSet = settings.charSet || characterSet;

	const getPos = numberFactory({
		range: {
			min: 0,
			max: charSet.length - 1
		}
	});

	return function charGenerator(ctx){
		return charSet[getPos(ctx)];
	};
}

function stringFactory(settings={}){
	let min = 1;
	let max = 10;

	if (settings.string){
		min = settings.string.min || min;
		max = settings.string.max || max;
	}

	const getChar = charFactory(settings);
	const getLength = numberFactory({
		range: {
			min,
			max
		}
	});

	return function stringGenerator(ctx){
		let rtn = '';

		for(let i = getLength(ctx); i > 0; i--){
			rtn += getChar();
		}

		return rtn;
	};
}

function sentenceFactory(settings={}){
	let min = 1;
	let max = 10;

	if (settings.sentence){
		min = settings.sentence.min || min;
		max = settings.sentence.max || max;
	}

	const getString = charFactory(settings);
	const getLength = numberFactory({
		range: {
			min,
			max
		}
	});

	return function sentenceGenerator(ctx){
		const rtn = [];

		for(let i = getLength(ctx); i > 0; i--){
			rtn.push(getString());
		}

		return rtn.join(settings.join||' ');
	};
}

module.exports = {
	charFactory,
	stringFactory,
	sentenceFactory
};
