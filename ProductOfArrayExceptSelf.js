function productExceptSelf(nums) {
  const length = nums.length;
  const result = new Array(length).fill(1);

  let prefixproduct = 1;
  for (let i = 0; i < length; i++) {
    result[i] = prefixproduct;
    prefixproduct *= nums[i];
  }

  let suffixproduct = 1;
  for (let i = length - 1; i >= 0; i--) {
    result[i] *= suffixproduct;
    suffixproduct *= nums[i];
  }
  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));
