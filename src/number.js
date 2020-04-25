
function getRandomValue(min, max){
	const length = max - min+1;

	return Math.floor(Math.random() * length) + min;
}

function randomFactory(settings={}){
	let min = 0;
	let max = 10;
	let precision = 0;

	if (settings.range){
		min = settings.range.min || min;
		max = settings.range.max || max;
	}

	if (settings.precision){
		precision = Math.pow(10, settings.precision);

		min = precision * min;
		max = precision * max;
	}

	return function numberGenerator(){
		let value = getRandomValue(min, max);

		if (precision){
			return value / precision;
		} else {
			return value;
		}
	};
}

function seriesFactory(settings){
	return function numberSeries(ctx){
		return ctx.series(settings.series);
	};
}

module.exports = {
	randomFactory,
	seriesFactory
};
