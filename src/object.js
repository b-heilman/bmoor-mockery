
const {set} = require('bmoor/src/core.js');

function objectFactory(settings, manager){
	const generators = settings.map(
		s => {
			const gen = manager.get(s.generator)(s.settings, manager);

			return function(ctx, obj){
				set(obj, s.path, gen(ctx));

				return obj;
			};
		}
	);

	return function objectGenerator(ctx){
		return generators.reduce((agg, fn) => fn(ctx, agg), {});
	};
}

module.exports = {
	objectFactory
};
