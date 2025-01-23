class TreeNode{
    constructor(val = 0, left = null, right = null){
        this.val = val
        this.left = left
        this.right = right
    }
}

function sameTree(p,q){
    if(!p && !q){
        return true
    }
    if(!p || !q){
        return false
    }
    if(p.val !== q.val ){
        return false
    }
    return sameTree(p.left, q.left) && sameTree(p.right, q.right)
}