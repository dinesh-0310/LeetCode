/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    const arr = s.split("");
    const stack = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 'B' && stack[stack.length-1] == 'A'){
            stack.pop();
        }else if(arr[i] == 'D' && stack[stack.length-1] == 'C'){
            stack.pop();
        }else{
            stack.push(arr[i]);
        }
    }
    return stack.length;
 
};