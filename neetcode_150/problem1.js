/**
 * given an integer arry nums, return 'true' if any value appears twice in an array, return 'false' if every element 
 * is distince
 */

let numbers = [1,3,5,4,2]


function containsDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}

let response = containsDuplicate(numbers)
console.log(response)
