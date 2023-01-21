function solution(s) {
  function recur(str, arr) {
    const obj = { curStrNum: 1, diffStrNum: 0, idx: 0 };
    for (let i = 1; i < str.length; i += 1) {
      const fStr = str[0];
      if (fStr !== str[i]) {
        obj.diffStrNum += 1;
      } else {
        obj.curStrNum += 1;
      }

      if (obj.curStrNum === obj.diffStrNum) {
        obj.idx = i;
        const nextStr = str.slice(i + 1);
        const curStr = str.slice(0, i + 1);

        if (nextStr.length) {
          arr.push(curStr);
          return recur(nextStr, arr);
        }
      }
    }
    arr.push(str);
    return arr;
  }

  const result = recur(s, []);
  return result.length
}