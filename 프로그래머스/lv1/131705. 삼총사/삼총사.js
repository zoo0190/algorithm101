function solution(number) {
    var answer = 0;
    
    const combination = (arr, num) => {
      const result = [];
      if (num === 1) return arr.map((item) => [item]);

      arr.forEach((val, idx, origin) => {
        const rest = origin.slice(idx + 1);
        const recurResult = combination(rest, num - 1);
        const attach = recurResult.map((recurVal) => [val, ...recurVal]);

        result.push(...attach);
      });

      return result;
    };
    
    combination(number, 3).forEach((item) => {
        let sum = 0
        item.forEach((val) => {
            sum += val
        })
        if (sum === 0) answer += 1
    })
    
    return answer;
}