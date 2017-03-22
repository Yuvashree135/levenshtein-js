## ABOUT: ##
  A levenshtein distance implementation to find the similarity score between two sentences. The score is the number of deletions, insertions or substitutions required to transform.

## INSTALL: ##

  `$ npm install levenshtein`

## USAGE: ##

```javascript
let logger = require('log4js').getLogger();

let levenshtein = require('./../src/levenshtein.js');

let sentence1 = 'Hi, this is levenshtein example';
let sentence2 = 'hi, this is example of levenshtein';

let difference = 0;

difference = levenshtein(sentence1, sentence2);

// difference will be 19
logger.debug('the number of insertion,deletion or substitutions to be made: '+difference);`
```
