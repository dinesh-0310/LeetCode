/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let validParenthese = "";
    let stack = [];
    let start = -1, end = -1;;
    for(let i = 0; i < s.length; i++){
        if(s[i] == '('){
            stack.push({
                ele: '(',
                i
            });
        }else if(s[i] == ')' && stack[stack.length-1] && stack[stack.length-1].ele == '('){
            if(start == -1) start = stack[stack.length-1].i;
            if(end == -1) end = i;

            if(stack[stack.length-1].i < start){
                validParenthese = '(' + validParenthese + ')';
                start = stack[stack.length-1].i
            }else{
                validParenthese = validParenthese + '()';
            }
            stack.pop();
        }
    }
    console.log("validParenthese: ",validParenthese)
    let index = 0;
    let ans = "";
    for(let i = 0; i < s.length; i++){
        if(s[i] == '(' || s[i] == ')'){
            if(s[i] == validParenthese[index]){
                ans += s[i];
                index++;
            }
        }else{
            ans += s[i];
        }
    }
    return ans;
};