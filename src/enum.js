
const {randomFactory: numberFactory, seriesFactory: snFactory} = require('./number.js');

function randomFactory(settings={}){
	const enums = settings.enums;

	const getPos = numberFactory({
		range: {
			min: 0,
			max: enums.length - 1
		}
	});

	return function numberGenerator(ctx){
		return enums[getPos(ctx)];
	};
}

function counterFactory(settings){
	const enums = settings.enums;

	return function enumCounterGenerator(ctx){
		return enums[ctx.counter % enums.length];
	};
}

function seriesFactory(settings){
	const enums = settings.enums;

	const getPos = snFactory(settings);

	return function enumCounterGenerator(ctx){
		return enums[getPos(ctx) % enums.length];
	};
}

module.exports = {
	randomFactory,
	counterFactory,
	seriesFactory
};
