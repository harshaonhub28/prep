//function to reverse the array
function rev(arr) {
    let i = 0
    let j = arr.length - 1

    while (i < j) {
        swap(arr, i, j)
        i++;
        j--
    }

    return arr
}


//function to swap two elements in an array
function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return arr
}


console.log(rev([1, 2, 3, 4, 5, 6, 7]))