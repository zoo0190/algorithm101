function solution(numbers) {
    var answer = numbers;
    const table = [['zero', 0], ['one', 1], ['two', 2], ['three', 3], ['four', 4], ['five', 5], ['six', 6], ['seven', 7], ['eight', 8], ['nine', 9]]
    
    for(let re of table) {
        const regexr = new RegExp(re[0], 'g')
        answer = answer.replace(regexr, re[1])
    }
    return +answer;
}