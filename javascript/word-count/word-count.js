var Words = function () {	
};

Words.prototype.count = function(input) {
	//var count;
	// validate input
	if (typeof input === 'string') {
		// split input to array
		var rawWords = input.toLowerCase().split(/[\s:.,;"!&@$%^&_#*~?¡¿]/);
		var words = rawWords.filter(Boolean);
		for(var i = 0, length1 = words.length; i < length1; i++){
			words[i] = words[i].split(/^'|'$/).filter(Boolean).join();
		}
		var ct = words.reduce(function (count,word) {
			if (count.hasOwnProperty(word)) {
				count[word]++;
			} else {
				count[word] = 1;
			}
			return count;
		}, {});
	return ct;
	} else {
		throw new Error('Input is not a String.')
	}
};

module.exports = Words;