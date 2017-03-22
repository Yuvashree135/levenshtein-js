let logger = require('log4js').getLogger();

let levenshtein = require('./../src/levenshtein.js');

let sentence1 = 'Hi, this is levenshtein example';
let sentence2 = 'hi, this is example of levenshtein';

let difference = 0;

difference = levenshtein(sentence1, sentence2);
logger.debug('the number of insertion,deletion or substitutions to be made: '+difference);

let sentence3 = 'This sentence is the same as the other one';
let sentence4 = 'This sentence is the same as the other one';

difference = levenshtein(sentence3, sentence4);
logger.debug('the number of insertion,deletion or substitutions to be made: '+difference);

let sentence5 = '';
let sentence6 = 'This sentence is the same as the other one';

difference = levenshtein(sentence5, sentence6);
logger.debug('the number of insertion,deletion or substitutions to be made: '+difference);
