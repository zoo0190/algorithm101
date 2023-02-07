function solution(s, skip, index) {
  const recur = (val) => {
    return val >= noSkipArr.length ? recur(val - noSkipArr.length) : val;
  };

  var answer = "";
  const noSkipArr = [..."abcdefghijklmnopqrstuvwxyz"].filter(
    (item) => ![...skip].includes(item)
  );

  for (const ss of s) {
    const findIndex = noSkipArr.indexOf(ss) + index;
    answer += noSkipArr[recur(findIndex)];
  }
  return answer;
}