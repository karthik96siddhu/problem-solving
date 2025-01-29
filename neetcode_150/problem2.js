/**
 * anagram program
 * s = cat, t = tac , response = true
 * s = cat, t = rat , response = false
 */

function isAnagram(s,t) {
    if (s.length !== t.length) {
        return false;
    }

    let charCount = {}

    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1
    }

    for (let char of t) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true
}

const result = isAnagram('cat', 'atc')
console.log(result)

