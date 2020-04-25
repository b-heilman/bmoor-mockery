
const {format} = require('date-fns');
const {format: tzFormat, utcToZonedTime} = require('date-fns-tz');

function dateFactory(settings={}){
	return function dateGenerator(ctx){
		const date = new Date(ctx.now || ctx.series(settings.series));

		if (settings.format){
			if (settings.format === 'unix(s)'){
				return (+date) / 1000;
			} else if (settings.format === 'unix(ms)'){
				return +date;
			} else {
				if (settings.timeZone) {
					return tzFormat(
						utcToZonedTime(new Date(date), settings.timeZone), 
						settings.format, 
						{
							timeZone: settings.timeZone
						}
					);
				} else {
					return format(date, settings.format);
				}
			}
		} else {
			return date;
		}
	};
}

module.exports = {
	dateFactory
};
