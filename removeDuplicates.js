function removeDuplicates(nums) {
    let i = 0
    for(let j = 1; j < nums.length; j++){
        if(nums[i] !== nums[j]){
            i++
            nums[i] = nums [j]
        }
    }
    return i+1
}

const nums = [1,1,2]
const k = removeDuplicates(nums)
console.log(k)
console.log(nums)