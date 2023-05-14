function solution(picture, k) {
    var answer = [];
    for(const pic of picture) {
        const temp = []
        pic.split('').forEach((v) => {
            for (let i = 0; i < k; i++) {
                temp.push(v)
            }
        })
        for(let a = 0; a < k; a++) {
            answer.push(temp.join(''))
        }
    }
    return answer;
}