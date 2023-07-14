var min_ProductSum = function(nums1, nums2) {
    nums1.sort((a, b) => b - a);
    nums2.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < nums1.length; i++) {
        sum += nums1[i] * nums2[i];
    }
    return sum;
};
