## ABOUT: ##
  A levenshtein distance implementation to find the similarity score between two sentences. The score is the number of deletions, insertions or substitutions required to transform.

## INSTALL: ##

  `$ npm install levenshtein`

## USAGE: ##

```javascript
const logger = require('log4js').getLogger();

const levenshtein = require('levenshtein-js');

let sentence1 = 'levenshtein';
let sentence2 = 'levenstei';

let difference = levenshtein(sentence1, sentence2);

// difference will be 2
logger.debug('the number of insertion,deletion or substitutions to be made: '+difference);`
```
## WORKING: ##

 In the above example, the character 'h' will be deleted and the character 'n' will be inserted. Here 1 insertion and 1 deletion so the difference is 2.
