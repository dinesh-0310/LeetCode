/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    let arr = num.toString().split("");
    let ans = num;
    for(let i = 0; i < arr.length-1; i++){
        for(let j = 1; j < arr.length; j++){
            if(arr[j] > arr[i]){
                let tempArr = [...arr];
                [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
                let tempAns = Number(tempArr.join(""));
                if(tempAns > ans) ans = tempAns;
            }
        }
    }
    return ans
};