/**
 * Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. 
 * If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
 */

// example
// input : arr = [1,4,4,4,5,3], ouput = 4
// input : arr = [1,2,3,4,5,4,3,2,1,3,4], output = 3

function migratoryBirds(arr) {
    let currentLowestNumber = arr[0];
    const occuranceCount = {
        [arr[0]]: 1
    };
    for (let i = 1; i < arr.length; i++) {
        const val = arr[i]
        if (!occuranceCount[val]) {
            occuranceCount[val] = 1;
        } else {
            occuranceCount[val]++;
        }
        if (occuranceCount[currentLowestNumber] === occuranceCount[val]) {
            if (val < currentLowestNumber) {
                currentLowestNumber = val;
            }
        } else if (occuranceCount[currentLowestNumber] < occuranceCount[val]) {
            currentLowestNumber = val;
        }
    }
    return currentLowestNumber
}