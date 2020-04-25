
function seriesFactory(settings){
	const step = settings.step || 1;
	let pos = settings.start || 0;

	return {
		next: function(){
			const rtn = pos;

			pos += step;

			return rtn;
		}
	};
}

class Context {
	constructor(settings){
		this.now = Date.now();
		this.counter = settings.start || 0;

		if (settings.series){
			this._series = Object.keys(settings.series)
			.reduce((agg, key) => {
				agg[key] = seriesFactory(settings.series[key]);

				return agg;
			}, {});
		}
	}

	next(step=1){
		this.counter += step;

		return this.counter;
	}

	series(series){
		return this._series[series].next();
	}
}

module.exports = {
	Context
};
