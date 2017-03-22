let logger = require('log4js').getLogger();

module.exports = function(sentence1, sentence2) {

  // returns -1 if the sentence is null or empty
    if (!sentence1 || !sentence2) {
        return -1;
    }
    sentence1 = sentence1.toLowerCase();
    sentence2 = sentence2.toLowerCase();

    let matrix = [];

    // increment along the first column of each row
    let i;
    for (i = 0; i <= sentence2.length; i = i + 1) {
        matrix[i] = [i];
    }

    // increment each column in the first row
    let j;
    for (j = 0; j <= sentence1.length; j = j + 1) {
        matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for (i = 1; i <= sentence2.length; i = i + 1) {
        for (j = 1; j <= sentence1.length; j = j + 1) {
            if (sentence2.charAt(i - 1) === sentence1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // substitution
                        Math.min(matrix[i][j - 1] + 1, // insertion
                        matrix[i - 1][j] + 1)); // deletion
            }
        }
    }

    return matrix[sentence2.length][sentence1.length];
}
