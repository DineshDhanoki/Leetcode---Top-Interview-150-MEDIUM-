function containsDuplicate(nums, k){
    const numMap = new Map()
for(let i=0; i<nums.length; i++){
    if(numMap.has(nums[i]) && 1 - numMap.get(nums[i]) <= k){
        return true
}
numMap.set (nums[i],i)
}
return false}

console.log(containsDuplicate([1,2,3,1,2,3],2))