var Hamming = function () {
};

Hamming.prototype.compute = function(a,b) {
	var type, strA, strB,
		hammingDis = 0;
	type = (typeof a === 'string') && (typeof b === 'string');
	strA = a.split('');
	strB = b.split('');
	if (strA.length === strB.length) {
		for (var i = strA.length - 1; i >= 0; i--) {
			if (strA[i] !== strB[i]){
				hammingDis++;
			};
		};
		return hammingDis;
	} else {
		throw new Error('DNA strands must be of equal length.')
	}
};

module.exports = Hamming;