/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
    let max = -Infinity;
    const obj = {};
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > max) max = nums[i];
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    }
    const sortedNums = nums.sort((a, b) => a - b);

    let ans = -1;
    for(let i = 0; i < sortedNums.length; i++){
        let tempAns = 1;
        let tempEle = sortedNums[i]
        while(true){
            let ele = Math.pow(tempEle, 2);
            console.log("ele: ", ele, tempAns)
            if(obj[ele]){
                obj[ele] = obj[ele] - 1;
                tempAns++;
                tempEle = ele
            }else{
                if(ans < tempAns && tempAns != 1) ans = tempAns;
                break;
            }

        }
    }
    return ans;
};