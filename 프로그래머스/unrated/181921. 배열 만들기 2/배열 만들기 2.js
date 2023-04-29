function solution(l, r) {
  var answer = [];
  let num = 1;
  for (;;) {
    const val = +num.toString(2) * 5;
    if (val > r) {
      return answer.length ? answer : [-1]
    }
    if (val >= l) {
      answer.push(val);
    }
    num += 1;
  }
}