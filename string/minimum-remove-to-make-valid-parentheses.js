/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let validParenthese = "";
    let stack = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] == '('){
            stack.push(s[i]);
        }else if(s[i] == ')' && stack[stack.length-1] == '('){
            validParenthese = '(' + validParenthese + ')';
            stack.pop();
        }
    }
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