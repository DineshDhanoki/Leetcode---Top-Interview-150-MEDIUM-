function minSubArrayLength(nums, target){
    let minLength = Infinity
    let currentSum = 0
    let left = 0

    for(let right = 0; right < nums.length; right ++){
        currentsum += nums[right]

        while(currentSum >= target){
        minLength = Math.min(minLength, left - right + 1)
        currentSum -= nums[right]
        left ++
    }
    }
    return minLength === Infinity ? 0 : minLength
}