var Isogram = function (input) {
	if (typeof input === 'string') {
		this.input = input;
	} else {
		throw new Error();
	}
};

Isogram.prototype.isIsogram = function(){
	var word = this.input.toLowerCase();
	//filter out the space elements
	var letters = word.split('').filter(function(l) {
		return l != ' ';
	});
	var isIsogram = true;
	for (var i = letters.length - 1; i >= 0; i--) {
		//test if the char is not a -
		if (letters[i].match(/[^-]/)) {
			//if it's a letter, match the length
			var letter = new RegExp(letters[i],'gi')
			matchNum = word.match(letter).length;
			console.log(letters[i] + matchNum);
			if (matchNum > 1) {
			isIsogram = false;
		}
		}
	}
	return isIsogram;
};

module.exports = Isogram;