function solution(numbers) {
    var answer = 0;
    const arr = []
    const toArr = numbers.split('')
    for(let n = 1; n <= toArr.length; n++) {
        const val = permutation(toArr, n)
        for(let nn of val) {
            const strToNum = +nn.join('')
            if(strToNum !== 0 && strToNum !== 1) {
                arr.push(strToNum)
            }
        }
    }
   
    const set = new Set([...arr])
    const setToArr = [...set]

    for (let nnn of setToArr) {
        const range = parseInt(Math.sqrt(nnn))
        for (let nnnn = 2; nnnn <= range; nnnn++) {
            if (nnn % nnnn === 0) {
                answer -= 1
                break
            }
        }
        answer += 1;
    }
    
    return answer;
}

const permutation = (arr, num) => {
  const result = [];
  if (num === 1) return arr.map((item) => [item]);

  arr.forEach((val, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    const recurResult = permutation(rest, num - 1);
    const attach = recurResult.map((recurVal) => [val, ...recurVal]);
    result.push(...attach);
  });

  return result;
};