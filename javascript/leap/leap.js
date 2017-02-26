//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(year) {
	if (isNaN(year)) {
		throw new Error('Year is not a number.');
	} else {
		this.year = year;
	}
};

Year.prototype.isLeap = function(input) {
	if (input != null ) {
		this.year = input;
	};
	
	var isLeap = (this.year%4 === 0 && this.year%100 !== 0) || (this.year%400 ===0);

	return isLeap;
};

module.exports = Year;
