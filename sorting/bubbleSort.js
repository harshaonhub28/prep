//swap adjacent elements if in wrong order
function bubbleSort(arr) {

    let swapCount = 0
    do {
        swapCount = 0
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                arr = swap(arr, i, i + 1)
                swapCount++;
            }
        }
    } while (swapCount)

    return arr
}

//function to swap two elements in an array
function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return arr
}

console.log(bubbleSort([5, 1, 4, 2, 8]))

//O(n*n) complexity