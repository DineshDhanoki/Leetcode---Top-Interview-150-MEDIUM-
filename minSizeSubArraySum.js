function minSubArrayLength(nums, target){
    let minLength = Infinity
    let currentSum = 0
    let left = 0

    for(let right = 0; right < nums.length; right ++){
        currentsum += nums[right]

        while(currentSum >= target){
        minLength = Math.min(minLength, right - left + 1)
        currentSum -= nums[left]
        left ++
    }
    }
    return minLength === Infinity ? 0 : minLength
}