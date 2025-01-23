function array(nums1, m, nums2, n){
    let i = m-1 //m=3 3-1=2 nums1=[1,2,3,0,0,0] i=3 because array starts count from 0
    let j = n-1 //n=3 3-1=2 nums2=[2,5,6] j=6 because same explaination as above 
    let k = m+n-1 // 6-1=5, here we use nums 1 array k=0 last position

    while
    (j>=0){
        if(i>=0 && nums1[i] > nums2[j]){
            nums1[k] = nums1[i]
            i--
        }else{
            nums1[k] = nums2[j]
            j--
        }
        k--
    }
}


const nums1 = [1,2,3,0,0,0]
const m = 3
const nums2 = [2,5,6]
const n = 3
array(nums1, m, nums2, n)
console.log(nums1)