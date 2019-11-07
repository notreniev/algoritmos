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

        if (nums[i] > second && nums[i] < first) {
            second = nums[i]
        }
    }

    return second
}

let nums = [2, 3, 6, 6, 5]
    //console.log(getSecondLargest(nums))

//const [a] = Array.from(new Set([6, 4, 7, 9, 6, 3, 4, 10, 9, 5])).sort((a, b) => a - b).reverse()
const [, a] = Array.from(new Set([6, 4, 7, 9, 6, 3, 4, 10, 9, 5])).sort((a, b) => a - b).reverse()
console.log(a)