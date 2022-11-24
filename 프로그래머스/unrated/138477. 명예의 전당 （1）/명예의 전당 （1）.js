function solution(k, score) {
  var answer = [];
  let hof = [];

  score.forEach((item) => {
    if (hof.length < k) {
      hof.push(item);
      hof.sort((a, b) => b - a);
      answer.push(hof[hof.length - 1]);
    } else {
      for (let idx = 0; idx < hof.length; idx++) {
        if (item >= hof[idx]) {
          hof = [...hof.slice(0, idx), item, ...hof.slice(idx, k - 1)];
          break;
        }
      }
      answer.push(hof[hof.length - 1]);
    }
  });

  return answer;
}