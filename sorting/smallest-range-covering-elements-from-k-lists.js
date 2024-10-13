/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    let range = [];
    let arr = [...nums];
    while(true){
        let min = Infinity;
        let max = -Infinity;
        let minIndex = -1;
        for(let i = 0; i < arr.length; i++){
            if(arr[i][0] < min){
                min = arr[i][0];
                minIndex = i;
            }
            if(arr[i][0] > max){
                max = arr[i][0];
            }
        }
        if(!range.length){
            range = [min, max]
        }else{
            if(max - min < range[1] - range[0]){
                range = [min, max];
            }
        }
        arr = arr.map((item, index) =>{
            if(index == minIndex){
                item.shift();
                return item;
            }else return item;
        });
        let isEmptyArrs = arr.filter(item => !item.length);
        if(isEmptyArrs.length) break;
    }
    return range;
};