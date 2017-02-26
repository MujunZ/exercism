var Gigasecond = function (input) {
	if (!isNaN(input.valueOf())) {
		this.dtStr = Date.parse(input) + Math.pow(10,9)*1000;
	} else {
		throw new Error('Input is not a valid date.');
	}
}

Gigasecond.prototype.date = function() {
		var gs = new Date(this.dtStr);
		return gs;	
};

module.exports = Gigasecond;