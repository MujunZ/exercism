var Pangram = function (input) {
	this.input = input;
}

Pangram.prototype.isPangram = function() {
	var isPangram;
	if (typeof this.input === 'string') {
		var words = this.input.toLowerCase();
		//generate a alphabet array
		var alphabet = [];
		var a = 'a'.charCodeAt(0),
			z = 'z'.charCodeAt(0);
		for (; a <= z; a++) {
			alphabet.push(String.fromCharCode(a));
		};
		//set the initial value is true.
		//if isPangram is true means the previous letters are all true
		isPangram = true;
		for (var i = alphabet.length - 1; i >= 0; i--) {
			var hasLetter = words.indexOf(alphabet[i]);
			var accumulate = (isPangram === true) && (hasLetter > -1);
			if (accumulate) {
				isPangram = true;
			}else{
				isPangram = false;
			}
		}
	return isPangram;
	} else {
		isPangram = false;
		return isPangram;
		throw new Error('Input is not a string.')
	}
};

module.exports = Pangram;