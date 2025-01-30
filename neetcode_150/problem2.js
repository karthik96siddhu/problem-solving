/**
 * anagram program
 * s = cat, t = tac , response = true
 * s = cat, t = rat , response = false
 */

function isAnagram(s, t) {
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

// const result = isAnagram('cat', 'atc')
// console.log(result)

// -----------another approach-------------

function isAnagram2(s, t) {
    if (s.length !== t.length) {
        return false
    }

    let charCounts = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        charCounts[s[i].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)]++;
        charCounts[t[i].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }
    let allZero = charCounts.every(count => count === 0)
    return allZero
}

const result2 = isAnagram2('cat', 'atc')
console.log(result2)

