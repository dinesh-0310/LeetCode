/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
    const stack = [];
    let diff = 0;
    for(let i = 0; i < nums.length; i++){
        if(!stack.length) stack.push({ele: nums[i], i});
        else{
            if(nums[i] < stack[stack.length-1].ele){
                stack.push({ele: nums[i], i});
            }else{
                //console.log("stack: ",stack)
                stack.forEach(item =>{
                    if(item.ele <= nums[i]){
                        diff = Math.max(diff, i - item.i);

                    }
                });
            }
        }
    }
    return diff;
};