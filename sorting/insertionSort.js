//The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]

        let j = i - 1
        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = key
        console.log(arr)
    }
    return arr
}


console.log(insertionSort([5, 1, 4, 2, 8]))


// Time Complexity: O(n^2) 
// Auxiliary Space: O(1)