


function mergeSort(arr, l, r) {
    if (l >= r) {
        return;//returns recursively
    } else {
        //take the mid point of the arr
        let m = Math.floor(l + ((r - l) / 2))

        console.log("==m==", m)
        //call merge sort on two sub arrays
        mergeSort(arr, l, m)
        mergeSort(arr, m + 1, r)
        //merge the two arrays back
        merge(arr, l, m, r)
    }
}

function merge(arr, l, m, r) {
    let n1 = m - l + 1
    let n2 = r - m

    let arr1 = []

    for (let i = 0; i < n1; i++) {
        arr1[i] = arr[l + i]
    }

    let arr2 = []
    for (let i = 0; i < n2; i++) {
        arr2[i] = arr[m + i + 1]
    }

    let i = 0
    let j = 0
    let k = l
    while (i < n1 && j < n2) {
        if (arr1[i] < arr2[j]) {
            arr[k] = arr1[i]
            i++;
        } else if (arr1[i] > arr2[j]) {
            arr[k] = arr2[j]
            j++
        }
        k++
    }


    //copy remaining elements in any of the arrays
    while (i < n1) {
        arr[k] = arr1[i]
        i++
        k++
    }

    while (j < n2) {
        arr[k] = arr2[j]
        j++
        k++
    }
    console.log(arr)
    return
}


let arr = [10, 80, 30, 90, 99]
mergeSort(arr, 0, arr.length - 1)
console.log(arr)