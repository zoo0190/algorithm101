function solution(numbers, target) {
  const arr1 = [];
  const arr2 = [];

  for (let i = 0; i <= numbers.length; i++) {
    const val = combination(numbers, i);
    !val.length
      ? arr1.push(0)
      : val.forEach((item) => {
          arr1.push(item.reduce((acc, cur) => acc + cur, 0));
        });

    const val2 = combination(numbers, numbers.length - i).reverse();
    !val2.length
      ? arr2.push(0)
      : val2.forEach((item) => {
          arr2.push(item.reduce((acc, cur) => acc - cur, 0));
        });
  }

  return arr1.map((item, i) => item + arr2[i]).filter((item) => item === target)
    .length;
}

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
