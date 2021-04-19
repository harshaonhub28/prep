//considering to sort in ascending order
//in given array, pick smallest element and place it in the beginning
//repeat for the remaining unsorted array

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = findMin(arr, i)
        swap(arr, i, minIndex)
    }
    return arr
}

function findMin(arr, startIndex) {
    let minIndex = startIndex

    for (let i = startIndex; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) { min = arr[i]; minIndex = i }
    }

    return minIndex
}

//function to swap two elements in an array
function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return arr
}

console.log(selectionSort([5, 1, 4, 2, 8]))


//O(n*n) complexity
// Time Complexity: O(n2) as there are two nested loops.

// Auxiliary Space: O(1)
// The good thing about selection sort is it never makes more than O(n) swaps and can be useful when memory write is a costly operation.