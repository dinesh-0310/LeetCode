/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    const arr = s.split("");
    const stack = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] != 'B' && arr[i] != 'D'){
            stack.push({
                ele: arr[i],
                i
            })
        }else{
            if(arr[i] == 'B' && stack[stack.length - 1] && stack[stack.length - 1].ele == 'A'){
                arr[i] = "";
                arr[stack[stack.length - 1].i] = "";
                stack.pop();
            }else if(arr[i] == 'D' && stack[stack.length - 1] && stack[stack.length - 1].ele == 'C'){
                arr[i] = "";
                arr[stack[stack.length - 1].i] = "";
                stack.pop();
            }else{
                stack.push({
                    ele: arr[i],
                    i
                })
            }
        }
    }
    //console.log("arr", arr);
    const str = arr.join("");
    return str.length;
};