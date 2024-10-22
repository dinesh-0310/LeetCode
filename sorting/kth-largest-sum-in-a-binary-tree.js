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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
    if(root == null) return 0;
    let obj = {};

    updateObject(root, obj, 0);
    //console.log("obj: ",obj)
    if(k > Object.keys(obj).length) return -1;
    const values = Object.values(obj).sort((a,b) => b - a);
    return values[k-1];
};

function updateObject(root, obj, key){
    if(!root) return;
    obj[key] = (obj[key] || 0) + root.val;

    updateObject(root.left, obj, key+1);
    updateObject(root.right, obj, key+1);

}