function getLargestNum(nums) {
  let ans = -Infinity
  for (let i = 0; i < nums.length; i++) {
    /*
         0   1    2  3    4    5   6
        [1, 123, 12, 42, 352, 53, 10]
        i = 0
        ans = -infinity
        o/p => 
    */
    if (ans < nums[i]) {
      ans = nums[i]
    }
  }
  return ans
}

const nums = [1, 123, -12, 532.4321, 42, 1352, 53, 10]
const ans = getLargestNum(nums)
console.log(ans)
