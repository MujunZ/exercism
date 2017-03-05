var Anagram = function (subject) {
	this.subject = subject.toLowerCase();
};

Anagram.prototype.matches = function(...wordList) {
	var matchWords = [];
	var subject = this.subject;
	function matchWord (word) {
		var tempWords = word.toLowerCase();
		if (tempWords.split('').sort().join('') === subject.split('').sort().join('') && word.toLowerCase() !== subject) {
		 	matchWords.push(word);
		 } 
	}
	//wordList length = 1?
	if (wordList.length === 1) {
		//wordList[0] = 'object'? (if yes, wordList[0] is an array)
		if (typeof wordList[0] === 'object') {
			//for wordList[0].length, sort each one and join, compare with subject
			for(var i = 0, length1 = wordList[0].length; i < length1; i++){
				matchWord(wordList[0][i]);			
			};
		} else if (typeof wordList[0] === 'string') {
			matchWord(wordList[0]);
		}
	} else if (wordList.length > 1) {
		for(var i = 0, length1 = wordList.length; i < length1; i++){
				matchWord(wordList[i]);			
			};
	}	
	return matchWords;
};

module.exports = Anagram;