//given arr and element k, find position of k

function binarySearch(arr, start, end, k) {

    if (start === end) {
        if (k === arr[start]) {
            return start
        } else {
            return -1
        }
    }

    let m = Math.floor((start + end) / 2)

    if (k < arr[m]) {
        return binarySearch(arr, start, m - 1, k)
    } else if (k > arr[m]) {
        return binarySearch(arr, m + 1, end, k)
    } else if (k === arr[m]) {
        return m
    }
}


let arr = [0, 1, 2, 3, 4, 5, 6]
let el = 40

console.log(binarySearch(arr, 0, arr.length - 1, el))