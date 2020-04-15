
function getRandomValue(min, max){
	const length = max - min;
	return Math.floor(Math.random() * length) + min;
}

function factory(settings={}){
	let min = 0
	let max = 10;
	let precision = 0;

	if (settings.range){
		min = settings.range.min;
		max = settings.range.max;
	}

	if (settings.precision){
		precision = Math.pow(10, settings.precision);

		min = precision * min;
		max = precision * max;
	}

	return function numberGenerator(ctx){
		let value = getRandomValue(min, max);

		if (precision){
			return value / precision;
		} else {
			return value;
		}
	};
}

module.exports = {
	factory
};

