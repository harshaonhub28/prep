//Given a sorted array arr[] and a number x, write a function that counts the occurrences of x in arr[]. Expected time complexity is O(Logn)

//Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 2
//Output: 4 // x (or 2) occurs 4 times in arr[]

let count = 0

function binaryCount(arr, start, end, k) {

    if (start === end) {
        if (k === arr[start]) {
            count++
        }
        return
    }

    let m = Math.floor((start + end) / 2)

    if (k < arr[m]) {
        return binaryCount(arr, start, m - 1, k)
    } else if (k > arr[m]) {
        return binaryCount(arr, m + 1, end, k)
    } else if (k === arr[m]) {
        count++
        binaryCount(arr, start, m - 1, k)
        binaryCount(arr, m + 1, end, k)
        return
    }
}

let arr = [1, 1, 2, 2, 2, 2, 3]
let k = 2

console.log(count)
binaryCount(arr, 0, arr.length - 1, k)
console.log(count)

//complexity - O(logn)