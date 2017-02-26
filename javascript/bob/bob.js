var Bob = function () {
	
};

Bob.prototype.hey = function(words) {
	var bobSay;
	var isYell = (words === words.toUpperCase()) && (words.toUpperCase() !== words.toLowerCase());
	if (typeof words === 'string') {
		if (isYell) {
			bobSay = 'Whoa, chill out!';
		} else if (words.substr(-1) === '?') {
			bobSay = 'Sure.';
		} else if (!words.trim()) {
			bobSay = 'Fine. Be that way!';
		} else {
			bobSay = 'Whatever.';
		}
	} else {
		throw new Error('Words is not string.')
	}
	return bobSay;
};

module.exports = Bob;