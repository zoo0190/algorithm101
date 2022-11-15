function solution(babbling) {
  var answer = 0;

  for (let s of babbling) {
    let ret = s.match(/aya|ye|woo|ma/g);
    ret = ret ?? [];

    if (ret.join('') === s) {
      for (let i = 0; i < ret.length - 1; i++) {
        if (ret[i] === ret[i + 1]) {
          answer -= 1;
          break;
        }
      }
      answer += 1;
    }
  }

  return answer;
}