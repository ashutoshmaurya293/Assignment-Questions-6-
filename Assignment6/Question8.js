let Multiply = function(mat1, mat2) {
    let m = mat1.length;
    let k = mat1[0].length;
    let n = mat2[0].length;
    let result = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let l = 0; l < k; l++) {
                result[i][j] += mat1[i][l] * mat2[l][j];
            }
        }
    }
    return result;
};
