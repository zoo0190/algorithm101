function solution(X, Y) {
  let arr = [];

  const makeNumCount = arr => {
    return arr.split('').reduce((acc, cur) => {
      if (acc[cur]) {
        acc[cur].push(cur);
      } else {
        acc[cur] = [cur];
      }
      return acc;
    }, {});
  };
  const xCount = makeNumCount(X);
  const yCount = makeNumCount(Y);

  for (const x in xCount) {
    if (x in yCount) {
      arr =
        xCount[x].length >= yCount[x].length
          ? [...arr, ...yCount[x]]
          : [...arr, ...xCount[x]];
    }
  }

  arr.sort((a, b) => b - a);
  if (!arr.length) return '-1';
  if (+arr[0] === 0) return '0';
  return arr.join('');
}