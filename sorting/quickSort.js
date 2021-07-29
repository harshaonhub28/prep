//10, 80, 30, 90, 99, 87, 14, 35, 23
//10, 14, 30, 90, 99, 87, 80, 35, 23
//10, 14, 23, 90, 99, 87, 80, 35, 30

//3    4   5   6   7   8
//90, 99, 87, 80, 35, 30


//    99, 87, 80, 35, 90
//    35, 87, 80, 99, 90





//pick right most as pivot

function quickSort(arr, low, high) {
    if (low < high) {
        let pivotIndex = partition(arr, low, high)
        console.log("==ind==", pivotIndex)
        //array is now sorted with all numbers below pivotIndex to its left and above it; to its right
        //sorting these two again with quicksort
        quickSort(arr, low, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, high)
        //return arr
    }

}

function partition(arr, low, high) {

    console.log("====partition===", low, high)

    let pivot = arr[high]

    //lower index directs to low
    //higher index directs to element before pivot

    let i = low
    let j = high - 1

    while (i < j) {

        if (arr[i] > pivot && arr[j] < pivot) {
            console.log("==in loop==", arr[i], arr[j])
            swap(arr, i, j)
            i++;
            j--;
        } else {
            if (arr[i] < pivot) {
                i++;
            }
            if (arr[j] > pivot) {
                j--
            }
        }

        console.log("===com=-=", i, j)
    }

    console.log("====before swap", i, arr[i], arr[high])

    while (i <= high) {
        if (arr[i] >= arr[high]) {
            //swap pivot with i
            swap(arr, i, high)
            //returning the index of the pivot element
            return i
        } else if (arr[i] < arr[high]) {
            i++
        }
    }


}

//function to swap two elements in an array
function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return arr
}

let arr = [10, 80, 30, 90, 99, 87, 14, 35, 23, 44, 66, 77, 13, 456, 39]
quickSort(arr, 0, arr.length - 1)
console.log(arr)

//time complexity - O(nlogn), in place..no extra space required