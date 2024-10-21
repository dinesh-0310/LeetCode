/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
    const set = new Set();
    let count = 0;
    let str = "";
    for(let i = 0; i < s.length; i++){
        if(str || set.has(s[i])){
            str = str + s[i];
            if(!set.has(str)){
                count++;
                set.add(str);
                str = "";
            }
        }else{
            set.add(s[i]);
            count++;
        }
    }
    return count;
};