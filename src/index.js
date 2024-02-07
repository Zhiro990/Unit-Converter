class UnitConverter {
	constructor() {
		this.convertData = require("./functions/convertData.js");
		this.convertLength = require("./functions/convertLength.js");
		this.convertMass = require("./functions/convertMass.js");
		this.convertTemperature = require("./functions/convertTemperature.js");
		this.convertTime = require("./functions/convertTime.js");
		return this;
	}
}

module.exports = new UnitConverter();
