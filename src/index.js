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
  let codedLetter = []
  let morseStr = ''
  
  for (let i = 0; i < expr.length + 1; i += 2) {
    let letter = `${expr[i]}${expr[i+1]}`
    if (i % 10 === 0 && i !== 0 && morseStr !== '') {
      codedLetter.push(morseStr)
      morseStr = ''
    }
    switch(letter) {
      case '10': morseStr += '.';
        break;
      case '11': morseStr += '-';
        break;
      case '**': 
        codedLetter.push(' ');
        i += 8;
        break;
    }
  }

  let decodedLetter = ''
  for (let i = 0; i < codedLetter.length; i++) {
    if (codedLetter[i] === ' ') {
     decodedLetter += ' '
   } else {
     decodedLetter += MORSE_TABLE[codedLetter[i]]
   }
  }
  return decodedLetter

}

module.exports = {
    decode
}