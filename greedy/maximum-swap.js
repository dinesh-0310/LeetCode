/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    let arr = num.toString().split("");
    let pointer1 = 0;
    let pointer2 = arr.length - 1;
    let ans = num;
    while(pointer1 < pointer2){
        let tempArr = [...arr];
        if(arr[pointer1] < arr[pointer2]){
            [tempArr[pointer1], tempArr[pointer2]] = [tempArr[pointer2], tempArr[pointer1]];
            let tempAns = Number(tempArr.join(""));
            if(tempAns > ans) ans = tempAns;
        }
        pointer2--;
    }

    return ans;
};