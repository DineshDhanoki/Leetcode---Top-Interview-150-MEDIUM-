function majorityElement(nums){
    let count = 1
    let candidate = nums[0]

    for (let i=1; i<nums.length;i++){
        if(nums[i] === candidate){
            count++
        }else{
            count--
            if(count = 0){
                candidate = nums[i]
                count = 1 

            }
        }
    }
    return candidate
}

const nums=[3,2,3]
const result = majorityElement(nums)
console.log(result)