/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
    let sortedNums = nums.sort((a, b) => b - a);
    let score = 0;
    while(k > 0){
        score += sortedNums[0];
        let newNum = Math.ceil(sortedNums[0] / 3);
        sortedNums.shift();
        let arr = [];
        sortedNums.forEach((ele, i) =>{
            if(ele > newNum){
                arr.push(ele);
            }else{
                arr.push(newNum);
                arr = [...arr, ...sortedNums.filter((e, index) => index > i)];
                return;
            }
        });
        sortedNums = [...arr];
        k--;
    }
    return score;
};