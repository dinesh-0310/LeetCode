/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    const cache = {};

    function innerFunc(n){
        if(n == 1) return "0";
        if(cache[n]){
            return cache[n];
        }
        let previousAns = innerFunc(n-1);
        // console.log("previousAns: ",previousAns);
        // console.log("n: ",n)
        let result = previousAns + "1" + reverse(invert(previousAns));
        cache[n] = result;
        return result;
    }

    let str = innerFunc(n);
    //console.log("str: ", str);
    return str[k-1];
};

function invert(str){
    let arr = str.split("").map(item => item== "0" ? "1" : "0");
    return arr.join("");
}

function reverse(str){
    return str.split("").reverse().join("");
}