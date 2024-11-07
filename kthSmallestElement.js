class TreeNode{
    constructor(val = 0, left = null, right = null){
        this.val = val
        this.left = left 
        this.right = right 
    }
}

function kthSmallest(root, k){
    const count = 0
    const result = null

function inorderTraversal(node){
    if(!node || result !== null) return

    inorderTraversal(node.left)

    count++;
    if(count === k){
        result = node.val
    return;
}
inorderTraversal(node.right)
}
inorderTraversal(root)
return result
}

const root1 = new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4)); 
const k1 = 1; 
console.log(kthSmallest(root1, k1));