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
    let depthSum = [];

    function dfs1(node, depth) {
        if (!node) return;

        if (depth >= depthSum.length) {
            depthSum.push(node.val);
        } else {
            depthSum[depth] += node.val;
        }

        dfs1(node.left, depth + 1);
        dfs1(node.right, depth + 1);
    }

    function dfs2(node, val, depth) {
        if (!node) return;

        node.val = val;

        let cousinSum = depth + 1 < depthSum.length ? depthSum[depth + 1] : 0;
        cousinSum -= (node.left ? node.left.val : 0);
        cousinSum -= (node.right ? node.right.val : 0);

        if (node.left) dfs2(node.left, cousinSum, depth + 1);
        if (node.right) dfs2(node.right, cousinSum, depth + 1);
    }

    dfs1(root, 0);
    dfs2(root, 0, 0);

    return root;
};

