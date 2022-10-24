function solution(common) {
    const n1 = common[0]
    const n2 = common[1]
    const n3 = common[2]
    
    if (n2 - n1 === n3 - n2) answer = common[common.length - 1] + n2 - n1
    if (n2 / n1 === n3 / n2) answer = common[common.length - 1] * (n2 / n1)
    return answer;
}