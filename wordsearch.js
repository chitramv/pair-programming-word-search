//function to find the transpose of matrix
const transpose = function(matrix) {
    let transpose = [];
    for (let i =0; i < matrix.length; i++) {   // for initialising transpose as a matrix
      transpose.push([]);
    }
    for (let i = 0; i < matrix.length; i++) {
      for ( let j = 0; j < matrix[i].length; j++) {
        if(!transpose[j]) {transpose.push([])}; // for no of rows < no of columns
        transpose[j].push(matrix[i][j]);// pushing row elements as column of transpose
      }
    }
    return transpose;
  };




const wordSearch = function(letters, word)  {
    if (word.length === 0) return false;
    let horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    const lettersTpse = transpose(letters);
     horizontalJoin = lettersTpse.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    return false;
}




module.exports = wordSearch