function minimumInArray(arr) {
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}

console.log(minimumInArray([5, 4, 2, 6]))