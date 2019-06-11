function bubbleSort(arr) {
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr.length; j++) {
            if(arr[i] < arr[j]) {
                
                arr[i] = arr[i] + arr[j]
                arr[j] = arr[i] - arr[j]
                arr[i] = arr[i] - arr[j]
            }
        }
    }

    return arr
}

console.log(bubbleSort([2,7,1,7,3,9,4,3,9]))
console.log(bubbleSort([4,7,3,9,2,7,4,9,3,0,5]))