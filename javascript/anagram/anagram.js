var Anagram = function (subject) {
	this.subject = subject.toLowerCase();
};

Anagram.prototype.matches = function(...wordList) {
	this.matchWords = [];
	function matchWord (word) {
		console.log(word);
		if (word.toLowerCase().split('').sort().join('') === this.subject.split('').sort().join('') && word.toLowerCase() !== this.subject) {
		 	this.matchWords.push(word);
		 } 
	}
	//wordList length = 1?
	if (wordList.length === 1) {
		//wordList[0] = 'object'? (if yes, wordList[0] is an array)
		if (typeof wordList[0] === 'object') {
			//for wordList[0].length, sort each one and join, compare with subject
			for(var i = 0, length1 = wordList[0].length; i < length1; i++){
				if (wordList[0][i].toLowerCase().split('').sort().join('') === this.subject.split('').sort().join('') && wordList[0][i].toLowerCase() !== this.subject) {
					this.matchWords.push(wordList[0][i]);
				};				
			};
		} else if (typeof wordList[0] === 'string') {
			//matchWord(wordList[0]); Why can't I use this function here? it always return 'split is undefined'
			if (wordList[0].toLowerCase().split('').sort().join('') === this.subject.split('').sort().join('') && wordList[0].toLowerCase() != this.subject) {
				this.matchWords.push(wordList[0]);
			}
		}
	} else if (wordList.length > 1) {
		for(var i = 0, length1 = wordList.length; i < length1; i++){
				if (wordList[i].toLowerCase().split('').sort().join('') === this.subject.split('').sort().join('') && wordList[i].toLowerCase() !== this.subject) {
					this.matchWords.push(wordList[i]);
				};				
			};
	}	
	return this.matchWords;
};

module.exports = Anagram;