/* Given an array A[] consisting 0s, 1s and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.
Examples: 
 

Input: {0, 1, 2, 0, 1, 2}
Output: {0, 0, 1, 1, 2, 2}

Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2} */

function sortDutch(arr) {
    let low = 0
    let mid = 0
    let high = arr.length - 1

    while (mid <= high) {
        if (arr[mid] === 0) {
            swap(arr, low, mid)
            low++
            mid++
        } else if (arr[mid] === 1) {
            mid++
        } else {
            swap(arr, mid, high)
            high--
        }
        console.log(arr, low, mid, high)
    }

}

//function to swap two elements in an array
function swap(arr, i, j) {
    console.log(i, j)
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return arr
}

let arr = [0, 1, 2, 0, 1, 2]
sortDutch(arr)
console.log(arr)


//complexity - O(n) 
//its same complexity in simple counting and adding 0,1,2 in order
//but the difference in this approach is only one array traversal required