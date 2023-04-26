function solution(num_list) {
    let evenString = ''
    let oddString = ''
    
    num_list.forEach((v) => {
        if(v % 2 === 0) {
            oddString += v.toString()
        } else {
            evenString += v.toString()
        }
    })
    
    return +evenString + +oddString
}