var DnaTranscriber = function () {
	
};

DnaTranscriber.prototype.toRna = function(dna) {
	var rna,rnaStr = [];
	if (typeof dna === 'string') {
		var dnaStr = dna.split('');
		for(var i = 0, length1 = dnaStr.length; i < length1; i++){
				switch (dnaStr[i]) {
					case 'A':
						rnaStr[i] = 'U';
						break;
					case 'T':
						rnaStr[i] = 'A';
						break;
					case 'C':
						rnaStr[i] = 'G';
						break;
					case 'G':
						rnaStr[i] = 'C';
						break;
					default:
						throw new Error('Invalid input');
						break;
				};
		};
		rna = rnaStr.join('');
		return rna;
	} else {
		throw new Error('DNA is not a string.');
	}
};

module.exports = DnaTranscriber;