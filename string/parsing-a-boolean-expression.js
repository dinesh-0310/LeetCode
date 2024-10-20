/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function(expression) {
    const stack = [];
    for(let i = 0; i < expression.length; i++){
        if(expression[i] != ')'){
            stack.push(expression[i]);
        }else{
            let str = ")";
            while(stack[stack.length-1] != '('){
                str = stack[stack.length-1] + str;
                stack.pop();
            }
            str = '(' + str;
            stack.pop();
            str = stack[stack.length-1] + str;
            stack.pop();
            let result = getResult(str);
            stack.push(result);
            //console.log("stack in loop: ", stack);
        }
    }
    //console.log("stack: ", stack);
    return stack[0] == 'f' ? false : true;
};

function getAns(ans){
    return ans == false ? 'f': 't';
}
function getResult(str){
    //console.log("str in func:", str);
    const arr = str.split("");
    let operation = arr.shift();
    // console.log("operation: ", operation);
    // console.log("arr after shift: ", arr);
    let values = arr.filter(s => s != '(' && s != ')' && s != ",");
    //console.log("values: ", values);
    let booleanValues = values.map(item => item == 'f' ? false : true);
    switch(operation){
        case '|':
            if(values.length == 1){
                return getAns(booleanValues[0]);
            }else{
                const ans = booleanValues.reduce((acc,ele) => acc || ele, booleanValues[0]);
                return getAns(ans);
            }
        case '&':
            if(values.length == 1){
                return getAns(booleanValues[0]);
            }else{
                const ans = booleanValues.reduce((acc,ele) => acc && ele, booleanValues[0]);
                return getAns(ans);
            }
        case '!':
            const ans = !booleanValues[0];
            return getAns(ans);
        default:
            return getAns(booleanValues[0]);
    }
}