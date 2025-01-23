class TreeNode{
    constructor(val = 0, left = null, right = null){
        this.val = val
        this.left = left
        this.right = right
    }
}

function getMinimumDifference(root){
    let prev = null
    let minDiff = Infinity

    function inOrder(node){
        if(node === null) return;
        inOrder(node.left)

        if(prev !== null){
            minDiff = Math.min(minDiff, node.val - prev)
        }
        prev = node.val
        inOrder(node.right)
    }
    inOrder(root)
    return minDiff
}