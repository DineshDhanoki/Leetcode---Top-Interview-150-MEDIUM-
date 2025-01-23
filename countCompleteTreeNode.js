class TreeNode{
    constructor(val = 0, left= null, right = null){
        this.val = val
        this.left = left
        this.right = right
    }
}

function countNodes(root){
    if(root === null) return 0

    let leftDepth = getDepth(root.left)
    let rightDepth = getDepth(root.right)

    if(leftDepth === rightDepth){
        return (1 << leftDepth) + countNodes(root.right)
    } else {
        return (1 << rightDepth) + countNodes(root.left)
    }
}

function getDepth(node){
   let depth = 0
    while (node){
        depth ++
        node = node.left
    }
    return left
}