/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const reverseS1 = s1.trim().split("").reverse().join("");

    let index = 0;
    for(let i = 0; i < s2.length; i++){
        if(index == reverseS1.length) return true;

        if(s2[i] == reverseS1[index]){
            index++;
        }else{
            index = 0;
        }
    }
    return false;
};