class TreeNode{
    constructor(val = 0, left = null, right = null){
        this.val = val
        this.left = left
        this.right = right 
    }
}

function buildTree(preorder, inorder){
    if(preorder.length === 0 || inorder.length === 0){
        return null
    }

    const rootVal = preorder[0]
    const root = new TreeNode(rootVal)

    const rootIndex = inorder.indexOf(rootVal)

    root.left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex))
    root.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1))

    return root
}

function printTree(root){
    if(!root) return []

    const queue = [root]
    const result = []

    while(queue.length > 0){
        const node = queue.shift()
        if(node){
            result.push(node.val)
            queue.push(node.left)
            queue.push(node.right)
        } else {
            result.push(null)
        }
    }
    return result
}

class TreeNode { 
    constructor(val = 0, left = null, right = null) { 
        this.val = val; 
        this.left = left; 
        this.right = right; 
    } } 
    function buildTree(preorder, inorder) { 
        if (preorder.length === 0 || inorder.length === 0) { 
            return null; } 

            const rootVal = preorder[0]; 
            const root = new TreeNode(rootVal); 

            const rootIndex = inorder.indexOf(rootVal); 

            root.left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex)); 
            root.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1)); 
            return root; 
        }