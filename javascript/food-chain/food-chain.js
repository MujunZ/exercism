var FoodChain = function () {
	this.lyrics = [
		'I know an old lady who swallowed a fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n',
		'I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n',
		'I know an old lady who swallowed a bird.\nHow absurd to swallow a bird!\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n',
		'I know an old lady who swallowed a cat.\nImagine that, to swallow a cat!\nShe swallowed the cat to catch the bird.\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n',
		'I know an old lady who swallowed a dog.\nWhat a hog, to swallow a dog!\nShe swallowed the dog to catch the cat.\nShe swallowed the cat to catch the bird.\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n',
		'I know an old lady who swallowed a goat.\nJust opened her throat and swallowed a goat!\nShe swallowed the goat to catch the dog.\nShe swallowed the dog to catch the cat.\nShe swallowed the cat to catch the bird.\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n',
		'I know an old lady who swallowed a cow.\nI don\'t know how she swallowed a cow!\nShe swallowed the cow to catch the goat.\nShe swallowed the goat to catch the dog.\nShe swallowed the dog to catch the cat.\nShe swallowed the cat to catch the bird.\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n',
		'I know an old lady who swallowed a horse.\nShe\'s dead, of course!\n'
	]
}

FoodChain.prototype.verse = function(verse) {
	if (verse < 9 && verse > 0) {
		return this.lyrics[verse - 1];
	} else {
		return new Error('verse is not valaid');
	}
};

FoodChain.prototype.verses = function(verseA,verseB) {
	this.output = '';
	if (verseA < 9 && verseA > 0 && verseB < 9 && verseB > 0 && verseA < verseB) {
		for(var i = verseA; i <= verseB; i++){
			this.output += this.lyrics[i-1] + '\n';
		}
		return this.output;
	} else {
		return new Error('verses are not valaid');
	}	
};

module.exports = FoodChain;