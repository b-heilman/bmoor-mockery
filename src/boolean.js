
function randomFactory(){
	return function booleanGenerator(){
		return Math.random() * 10 % 2 === 0;
	};
}

module.exports = {
	randomFactory
};
