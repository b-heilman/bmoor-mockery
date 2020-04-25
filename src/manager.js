
const {set, get} = require('bmoor/src/core.js');

class Manager {
	constructor(settings={}){
		this.generators = settings;
	}

	get(path){
		return get(this.generators, path);
	}

	set(path, generator){
		return set(this.generators, path, generator);
	}
}

module.exports = {
	Manager
};
