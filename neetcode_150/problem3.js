/**
 * sum of 2 numbers return index of them
 * target = 9, arr = [1,7,3,2], result = [1,3] or [3,1]
 */

function twoSum(nums, target) {
    let map = new Map()

    for (let i = 0; i< nums.length; i++) {
        const compliment = target - nums[i];

        if (map.has(compliment)) {
            return [map.get(compliment), i]
        }

        map.set(nums[i], i)

    }
    return []
}

const result = twoSum([1,7,3,2], 9)
console.log(result)
