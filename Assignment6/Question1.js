var diString_Match = function(s) {
    let n = s.length;
    let smallest = 0;
    let largest = n;
    let result = [];
    for (let i = 0; i < n; i++) {
        if (s[i] === 'I') {
            result.push(smallest);
            smallest++;
        } else {
            result.push(largest);
            largest--;
        }
    }
    result.push(smallest);
    return result;
};
