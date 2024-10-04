/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    const sortedSkills = skill.sort((a,b) => a - b);
    let pointer1 = 0;
    let pointer2 =  sortedSkills.length - 1;
    let sum = sortedSkills[pointer1] + sortedSkills[pointer2];
    let ans = sortedSkills[pointer1] * sortedSkills[pointer2];
    pointer1++;
    pointer2--;
    //console.log("sortedSkills: ",sortedSkills)
    while(pointer1 < pointer2){
        if(sortedSkills[pointer1] + sortedSkills[pointer2] != sum){
            return -1;
        }
        ans += sortedSkills[pointer1] * sortedSkills[pointer2]
        pointer1++;
        pointer2--;
    }
    return ans;
};