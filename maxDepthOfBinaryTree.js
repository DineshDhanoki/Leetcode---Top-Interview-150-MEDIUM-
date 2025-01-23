class TreeNode{
    constructor(val = 0, left = null, right = null){
        this.val = val
        this.left = left
        this.right = right
    }
}

function maxDepth(root){
    if(root === null){
        return 0;
    } else {
        const leftDepth = maxDepth(root.left)
        const rightDepth = maxDepth(root.right)
        return maxDepth = (leftDepth, rightDepth) + 1
    }
    }

