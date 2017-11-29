// Given an array of integers, return indices of the two numbers
// such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

let twoSum = (nums, target) => {
    let items = new Set()

    for (i = 0; i < nums.length; i++) {
        if (items.has(target - nums[i])) {
            return [nums.indexOf(target - nums[i]), i]
        }
        items.add(nums[i])
    }

    return false
}
