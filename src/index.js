const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
	const letterArray = expr.match(/([0,1]{10})|(\*{10})/g);
	const replacer = match => {
		switch (match) {
			case '10':
				return '.';
			case '11':
				return '-';
			case '00':
			default:
				return '';
		}
	}
	let decode = '';
	
	while (letterArray.length) {
		const letter = letterArray.pop().replace(/\d{2}/g, replacer);
		decode = (MORSE_TABLE[letter] || ' ') + decode;
	}

	return decode;
}

module.exports = {
    decode
}