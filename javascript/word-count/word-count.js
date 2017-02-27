var Words = function () {	
};

Words.prototype.count = function(input) {
	var count = {};
	// validate input
	if (typeof input === 'string') {
		// split input to array
		//var rawWords = input.split(/[^A-Za-z0-9_']/);
		var rawWords = input.split(/[^\w']/);
		// clean the empty elements in the array
		var words = rawWords.filter(Boolean);
		// clean the apostrophes. ???? is there a more elegant way to do it in the rawword step?????
		for(var i = 0, length1 = words.length; i < length1; i++){
			words[i] = words[i].split(/^'|'$/).filter(Boolean).join();
		}
		// loop words array 
		for(var i = 0, length1 = words.length; i < length1; i++){
			words[i] = words[i].toLowerCase();
			if (typeof count[words[i]] === 'undefined') {
				count[words[i]] = 1;
			}else{
				count[words[i]]++;
			};	
		};
		return count;
	} else {
		throw new Error('Input is not a String.')
	}
};

module.exports = Words;