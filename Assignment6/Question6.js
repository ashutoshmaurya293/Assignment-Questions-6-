var findOriginal_Array = function(changed) {
    let n = changed.length;
    if (n % 2 !== 0) {
        return [];
    }
    changed.sort((a, b) => a - b);
    let original = [];
    let map = new Map();
    for (let i = 0; i < n; i++) {
        if (map.has(changed[i])) {
            map.set(changed[i], map.get(changed[i]) - 1);
            if (map.get(changed[i]) === 0) {
                map.delete(changed[i]);
            }
            original.push(changed[i]);
        } else {
            let double = changed[i] * 2;
            if (!map.has(double)) {
                return [];
            }
            map.set(double, map.get(double) - 1);
            if (map.get(double) === 0) {
                map.delete(double);
            }
            original.push(changed[i]);
        }
        map.set(changed[i] * 2, (map.get(changed[i] * 2) || 0) + 1);
    }
    return original;
};
