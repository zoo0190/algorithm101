function solution(k, m, score) {
  var answer = 0;
  const arr = [];
  score.sort((a, b) => b - a);

  const boxNum = parseInt(score.length / m);

  for (let n = 1; n <= boxNum; n++) {
    arr.push(score.slice((n - 1) * m, n * m));
  }

  answer = arr.reduce((acc, cur) => {
    const minVal = Math.min(...cur);
    acc += minVal * cur.length;
    return acc;
  }, 0);

  return answer;
}