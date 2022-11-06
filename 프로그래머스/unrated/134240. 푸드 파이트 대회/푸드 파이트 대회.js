function solution(food) {
    var answer = '';

    food.forEach((item, idx) => {
        if(idx) {
            const repeatVal = parseInt(item / 2)
            answer += idx.toString().repeat(repeatVal)
        }
    })
    
    return answer + "0" + answer.split('').reverse().join('');
}