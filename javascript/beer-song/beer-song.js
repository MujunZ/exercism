var BeerSong = function () {
	this.verses = [];
	var verse2 = "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n";
	var verse1 = '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
	var verse0 = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
	this.verses.push(verse0);
	this.verses.push(verse1);
	this.verses.push(verse2);
	for (var i = 3; i <= 99; i++) {
		var verse = i + " bottles of beer on the wall, "+ i +" bottles of beer.\nTake one down and pass it around, "+ (i-1) +" bottles of beer on the wall.\n";
		this.verses.push(verse);
	}
};

BeerSong.prototype.verse = function(input) {
	var verse;
	if (isNaN(input)) {
		throw new Error('input is not a number');
	} else {
		var num = input;
		verse = this.verses[input];
	}
	return verse;
};

BeerSong.prototype.sing = function(bg,end) {
	var lyrics = [];
	//make sure bg is a number, end is either a number or 'undefined'.
	var hasNaN = (isNaN(bg)) || ((isNaN(end)) && (typeof end != 'undefined'));
	if (hasNaN){
		throw new Error('bg or end is not a number');
	}else{
		if (typeof end === 'undefined') {
			end = 0;
		}
		for (; bg >= end; bg --) {
			lyrics.push(this.verses[bg]);
		}
		return lyrics.join('\n');
	}
};

module.exports = BeerSong;