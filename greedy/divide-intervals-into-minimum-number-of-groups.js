/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function(intervals) {
    if(intervals.length == 0) return 0;
    let groups = 0;
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    groups++;
    //console.log("sortedIntervals: ",sortedIntervals)
    const obj = {};
    obj[groups] = sortedIntervals[0];
    for(let i = 1; i < sortedIntervals.length; i++){
        let isPartOfGroup = false;
        for(let key in obj){
            if(sortedIntervals[i][0] > obj[key][1]){
                obj[key] = [obj[key][0], sortedIntervals[i][1]];
                isPartOfGroup = true;
                break;
            }
        }
        if(!isPartOfGroup){
            groups++;
            obj[groups] = sortedIntervals[i];
        }
        //console.log("obj & groups: ", obj, groups);
    }

    return groups;
};