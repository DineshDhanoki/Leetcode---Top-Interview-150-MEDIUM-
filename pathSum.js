class TreeNode{
    constructor (val = 0, left = null, right = null){
        this.val = val
        this.left = left
        this.right = right 
    }
}

function pathSum(root, targetSum){
    if(root === null){
        return false
    }

    if(root.left === 0 && root.right === 0 && root.val === targetSum){
        return true
    }
    const newTargetSum = targetSum - root.val
    return pathSum(root.left, newTargetSum) || pathSum(root.right, newTargetSum)
}