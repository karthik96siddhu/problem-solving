/**
 * given an array of integer and positive integer k, determine the number of (i,j) pairs 
    where i < j and ar[i] + ar[j] divisible by k.
    sample ar = [1,2,3,4,5,6] 
    k = 5.
    n = 6 (length of an array)

 */

// with time complexity O(n^2)
function countDivisiblePairs(n,k,arr) {
    let count = 0;
    for (let i=0; i< n; i++) {
        for (let j=i+1;j<n;j++) {
            if ((arr[i]+arr[j])%k === 0) {
                count++
            }
        }
    }
    console.log(count)
}

countDivisiblePairs(6,5, [1,2,3,4,5,6])

// time complexity reduce to O(n)



