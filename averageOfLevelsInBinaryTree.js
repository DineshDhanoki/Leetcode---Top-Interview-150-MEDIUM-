class TreeNode{
    constructor(val = 0, left = null, right = null){
        this.val = val
        this.right = right
        this.left = left
    }
}

function averageOfLevels(root){
    if(root === null){
        return []
    }

    const average = []
    const queue = [root]

    while(queue.length > 0){
        let levelSum = 0
        let levelCount = queue.length

        for(let i = 0; i < levelCount; i++){
            const node = queue.shift()
            levelSum += node.val

            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    average.push (levelSum / levelCount)
    }
    return average
}