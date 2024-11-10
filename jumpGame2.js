function canJump(nums) {
  let jump = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    if (i === currentEnd) {
      jump++;
      currentEnd = farthest;

      if (currentEnd >= nums.length - 1) {
        break;
      }
    }
  }
  return jump;
}
