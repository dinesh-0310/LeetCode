/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var replaceValueInTree = function(root) {
    const obj = {};
    updateObj(root, obj, 0, null);
    //console.log("obj: ",obj)
    let updatedObj = updateObjSum(obj, root);
    //console.log("updatedObj: ",updatedObj)
    updateTree(root,updatedObj);
    return root;
};

function updateObj(root, obj, depth, parent){
    if(!root) return;
    if(obj[depth]){
       if(parent && obj[depth][parent.val]){
            obj[depth][parent.val].push(root.val);
       }else{
            obj[depth][parent.val] = [root.val];
       }
    }else{
        obj[depth] = {}
        if(parent){
            obj[depth][parent.val] = [root.val];
        }
    }

    updateObj(root.left, obj, depth+1, root);
    updateObj(root.right, obj, depth+1, root);

}

function updateObjSum(obj, root){
    let updatedObj = {};
    for(let key in obj){
        if(key == 0){
            updatedObj[root.val] = 0;
        }else{
            if(Object.keys(obj[key]).length == 1){
                obj[key][Object.keys(obj[key])[0]].forEach((ele) =>{
                    updatedObj[ele] = 0;
                })

            }else{
                let values = Object.values(obj[key]);
                //console.log("values: ",values)
                let totalSum = values.reduce((acc, ele) => {
                    return acc + ele.reduce((acc, item) => acc+item, 0);
                },0);
                //console.log("totalSum: ",totalSum)
                values.forEach((ele) => {
                    let currentSum = ele.reduce((acc, item) => item+acc, 0);
                    ele.forEach(eleNum =>{
                        updatedObj[eleNum] = totalSum - currentSum;
                    })
                })
            }
        }
    }
    return updatedObj;
}

function updateTree(root, updatedObj){
    if(!root) return;

    root.val = updatedObj[root.val];
    updateTree(root.left, updatedObj);
    updateTree(root.right, updatedObj);
}
