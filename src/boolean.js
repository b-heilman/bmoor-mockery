
function factory(settings){
	return function booleanGenerator(ctx){
		return Math.random() * 10 % 2 === 0;
	};
}

module.exports = {
	factory
};
