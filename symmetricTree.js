class TreeNode{
    constructor (val = 0, left = null, right = null){
        this.val = val
        this.left = left
        this.right = right 
    }
}

function isSymmetric(root){
    if (root === null){
        return true
    }

    function isMirror(left, right){
        if(left === null && right === null){
            return true
        }
        if(left === null || right === null){
            return false
        }
        return(left.val === right.val) && isMirror(left.right, right.left) && isMirror(left.left, right.right)
    }
    return isMirror(root.left, root.right)
}