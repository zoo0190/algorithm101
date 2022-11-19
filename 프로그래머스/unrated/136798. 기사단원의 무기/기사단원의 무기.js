function solution(number, limit, power) {
  var answer = 0;
  const numberArr = Array(number)
    .fill()
    .map((_, idx) => idx + 1);

  const divisorArr = numberArr.map((item) => {
    let total = 0;
    const range = Math.floor(Math.sqrt(item));

    for (let n = 1; n <= range; n++) {
      if (item % n === 0) total += 2;
      if (item / n === n) total -= 1;
    }
    return total;
  });

  answer = divisorArr.reduce((acc, cur) => {
    acc += cur > limit ? power : cur;
    return acc;
  }, 0);

  return answer;
}