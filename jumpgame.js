function canJump(nums){
    let maxSize = 0

    for(let i=0; i< nums.length; i++){
        if(i>maxSize){
            return false
        }
        maxSize = Math.max(maxSize, i + nums[i])
    }
    return true
}

console.log(canJump([2, 3, 1, 1, 4]))