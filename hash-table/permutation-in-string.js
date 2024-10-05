/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const len1 = s1.length, len2 = s2.length;
    if (len1 > len2) return false;

    let neededChar = {};
    for (let i = 0; i < s1.length; i++) {
        neededChar[s1[i]] = (neededChar[s1[i]] || 0) + 1;
    }

    let left = 0, //left pointer/index of the sliding window
		right = 0, //right pointer/index of the sliding window
		requiredLength = s1.length;

    while(right < s2.length) {
        if (neededChar[s2[right]] > 0) requiredLength--;
        neededChar[s2[right]]--;
        right++;

        if (requiredLength === 0) return true;
        if (right - left === s1.length) {
            if (neededChar[s2[left]] >= 0) requiredLength++;
            neededChar[s2[left]]++;
            left++
        }
    }
    return false;
};