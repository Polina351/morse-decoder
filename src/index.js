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
    let res = '';
    const countSymb = expr.length / 10;
    const countSubStr = 10 / 2;
    console.log(countSymb);
    for (let i = 0; i < countSymb; i++) {
        const subStr = expr.substring(i * 10, (i + 1) * 10);
        console.log(subStr);
        let subMorse = '';
        for (let j = 0; j < subStr.length; j++) {
            const symb = subStr.substring(j * 2, (j + 1) * 2);
            if (symb === '00') {
                continue;
            } else if (symb === '10') {
                subMorse += '.';
            } else if (symb === '11') {
                subMorse += '-';
            } else {
                subMorse += symb;
            }
        }
        if (subMorse != '**********') {
            res += MORSE_TABLE[subMorse]
        } else {
            res += ' ';
        }
    }
    return res;
}

module.exports = {
    decode
}