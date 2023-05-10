function solution(arr1, arr2) {
    if(arr1.length < arr2.length) return -1
    if(arr1.length > arr2.length) return 1
    if(arr1.length === arr2.length) {
        const arr1Sum = arr1.reduce((a, b) => a += b, 0)
        const arr2Sum = arr2.reduce((a, b) => a += b, 0)
        
        if(arr1Sum < arr2Sum) return -1
    	if(arr1Sum > arr2Sum) return 1
        return 0
    }
}