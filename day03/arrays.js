/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
    // Complete the function
    let first = 0
    let second = 0
    let thirty = 0

    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums[i] > first) {
            second = first;
            first = nums[i]
        }

        if (nums[i] > second) {
            thirty = second;
            second = nums[i]
        }

        if (nums[i] > second && nums[i] < first) {
            second = nums[i]
        }

        if (nums[i] > thirty && nums[i] < thirty) {
            thirty = nums[i]
        }

    }

    return second
}

let nums = [2, 3, 6, 6, 5]
console.log(getSecondLargest(nums))