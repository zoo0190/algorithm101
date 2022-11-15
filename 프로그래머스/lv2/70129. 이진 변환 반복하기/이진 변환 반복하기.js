function solution(s) {
  let turn = 0;
  let zeroNum = 0;

  const recur = (s) => {
    let zero = 0;
    if (s === '1') return;
    for (let n of s) {
      if (n === '0') zero += 1;
    }
    turn += 1;
    zeroNum += zero;
    return recur((s.length - zero).toString(2));
  };

  recur(s);
  return [turn , zeroNum];
}