/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack = [];
    let splittedStr = s.split("");

    for(let i = 0; i < s.length; i++){
        if(s[i] == '('){
            stack.push(i);
        }else if(s[i] == ')'){
            if(stack.length == 0) splittedStr[i] = "";
            else stack.pop();
        }
    }

    //remove extra '(' bracket from splittedStr
    for(let i = 0; i < stack.length; i++){
        splittedStr[stack[i]] = "";
    }
    return splittedStr.join("");
};