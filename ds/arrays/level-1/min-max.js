//function to get min and max of an array

//min
function getMin(arr) {
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}

//max
function getMax(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

console.log(getMin([3, 5, 2, 4, 9, 3, 1, 7, 3, 11, 12, 13]))
