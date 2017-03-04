var PhoneNumber = function (input) {
	var type = (typeof input === 'string') || (!isNaN(input));
	if (type) {
		this.input = input.toString().split('');
	} else {
		throw new Error('input is undefined');
	}
};

PhoneNumber.prototype.number = function() {
	var arr = this.input.filter(function(digit) {
		return !isNaN(digit) && digit != ' ';
	});
	var longerOrShorter = arr.length > 11 || arr.length < 10;
	if (longerOrShorter) {
		this.number = '0000000000';
	} else {
		if (arr.length === 10) {
			this.number = arr.join('');
		} else if (arr.length === 11) {
			if (arr[0] === '1') {
				this.number = arr.splice(1, 10).join('');
			} else {
				this.number = '0000000000';
			};
		};
	};
	return this.number;
};

PhoneNumber.prototype.areaCode = function() {
	this.number();
	return this.number.slice(0,3);
};

PhoneNumber.prototype.toString = function() {
	this.number();
	return '(' + this.number.slice(0,3) + ') ' + this.number.slice(3, 6) + '-' + this.number.slice(6);
};

module.exports = PhoneNumber;