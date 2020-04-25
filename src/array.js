
function arrayFactory(settings, manager){
	const generators = settings.map(
		s => manager.get(s.generator)(s.settings, manager)
	);

	return function arrayGenerator(ctx){
		return generators.map(fn => fn(ctx));
	};
}

module.exports = {
	arrayFactory
};
