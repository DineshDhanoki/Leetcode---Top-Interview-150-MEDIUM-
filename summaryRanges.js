function summaryRanges(nums){
    const range = []
    let start = nums[0]

    for(let i=1; i<=nums.length; i++){
        if(i === nums.length || nums[i] !== nums[i-1] +1){
            if (start === nums[i-1]){
                range.push(`${start}`)
            } else {
                range.push(`${start}->${nums[i-1]}`)
            }
            start = nums[i]
        }
    }
    return range
}

console.log(summaryRanges([0,1,2,4,5,7]))