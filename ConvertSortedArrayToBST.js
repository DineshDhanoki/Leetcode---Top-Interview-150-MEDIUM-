class TreeNode{
    constructor(val = 0, left = null, right = null){
        this.val = val
        this.left = left
        this.right = right
    }
}

function convertSortedArray(nums){
if(nums.length === 0){
    return null
}

function convertToBST(start, end){
    if(start > end){
        return null
    }

    const mid = Math.floor((start + end) / 2)
    const node = new TreeNode(nums[mid])

    node.left = convertToBST(start, mid - 1)
    node.right = convertToBST(mid + 1, end)
    return node
}
return convertToBST(0, nums.length - 1)
}