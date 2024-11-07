class TreeNode{
    constructor(val =0, left = null, right = null){
        this.val = val
        this.left = left 
        this.right = right
    }
}

function rightSideView(root){
    if(!root) return []

    const queue = [root]
    const rightView = []

    while(queue.length > 0){
        const levelSize = queue.length
    let currentNode

    for(let i = 0; i < levelSize; i++){
        currentNode = queue.shift()

    if(currentNode.left) queue.push(currentNode.left)
        if(currentNode.right) queue.push(currentNode.right)
        }
    rightView.push(currentNode.val)
    }
    return rightView
}

const root1 = new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3, null, new TreeNode(4)) ); 
console.log(rightSideView(root1));