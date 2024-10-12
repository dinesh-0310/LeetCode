/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function(intervals) {
    const starts = [];
    const ends = [];

    for(let i = 0; i < intervals.length; i++){
        starts.push(intervals[i][0]);
        ends.push(intervals[i][1]);
    };
    starts.sort((a,b) => a - b);
    ends.sort((a,b) => a - b);

    let pointer1 = 0;
    let pointer2 = 0;
    let res = 0;
    let groups = 0;
    while(pointer1 < intervals.length){
        if(starts[pointer1] <= ends[pointer2]){
            groups++;
            pointer1++;
        }else{
            groups--;
            pointer2++;
        }
        res = Math.max(res, groups);
    }
    return res;
};