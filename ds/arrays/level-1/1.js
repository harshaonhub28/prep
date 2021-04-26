//https://www.geeksforgeeks.org/top-50-array-coding-problems-for-interviews/


//Given an array arr[] and size of array is n and one another key x, and give you a segment size k. The task is to find that the key x present in every segment of size k in arr[].
//Input : 
// arr[] = { 3, 5, 2, 4, 9, 3, 1, 7, 3, 11, 12, 3} 
// x = 3 
// k = 3 
// Output : Yes 
// There are 4 non-overlapping segments of size k in the array, {3, 5, 2}, {4, 9, 3}, {1, 7, 3} and {11, 12, 3}. 3 is present all segments.

function ans(arr, x, k) {
    let numOfSeg = Math.floor(arr.length / k)

    let allSeg = true
    for (let i = 0; i < numOfSeg; i++) {
        let inSeg = false
        //do a loop for each segment and check if x is present
        for (let j = i * k; j < (i + 1) * k; j++) {
            if (arr[j] === x) {
                inSeg = true;
                break
            }
        }

        if (!inSeg) {
            allSeg = false;
            break
        }
    }

    return allSeg
}

console.log(ans([3, 5, 2, 4, 9, 3, 1, 7, 3, 11, 12, 13], 3, 3))