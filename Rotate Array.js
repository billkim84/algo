// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

// method 1: brute-force => 140ms, 39.6MB
const rotate = function(nums, k) {

  k = k % nums.length;

  for(let i=0; i<k; i++) {
    const tmp = nums[nums.length - k + i];

    for(let j=nums.length - k + i; j > i; j--) {
      nums[j] = nums[j -1];
    }
    nums[i] = tmp;
  }

  return nums;
};

// method 2: reverse(took a hint) => 80ms, 38.9M
const rotate2 = function(nums, k) {

  k = k % nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k-1);
  reverse(nums, k, nums.length - 1);

  function reverse(arr, start, end) {
    while(start < end) {
      const temp = arr[end];
      arr[end] = arr[start];
      arr[start] = temp;
      end--;
      start++;
    }
  }

  return nums;
};
