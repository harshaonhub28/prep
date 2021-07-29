/* An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.

Examples :

Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
Output: -12 -13 -5 -7 -3 -6 11 6 5

Note: Order of elements is not important here. */

function rearrange(arr) {
    let pivot = 0
    let i = 0
    let j = arr.length - 1
    while (i < j) {
        if (arr[i] > 0 && arr[j] < 0) {
            swap(arr, i, j)
        } else {
            if (arr[i] < 0) {
                i++
            }
            if (arr[j] > pivot) {
                j--
            }
        }
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

let arr = [12, 11, -13, -5, 6, -7, 5, -3, -6]
rearrange(arr)
console.log(arr)