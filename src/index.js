
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
    if (matrix) {
        for (let i = 0; i < matrix.length; i++){
            let row = matrix[i];
            if (i%2 === 0) {
                for (let j = 0; j < row.length; j++) {
                    let element = row[j];
                    result.push(element);
                }
            } else {
                for (let j = row.length - 1; j >= 0; j--) {
                    let element = row[j];
                    result.push(element);
                }
            }
        }
    }
    return result;
}
