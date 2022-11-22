function solution(clothes) {
  const obj = {};

  clothes.forEach((item) => {
    if (!obj[item[1]]) {
      obj[item[1]] = 1;
    } else {
      obj[item[1]] = obj[item[1]] + 1;
    }
  });

  const valArr = Object.values(obj);

  return valArr.reduce((acc, cur) => (acc *= cur + 1), 1) - 1;
}