function solution(survey, choices) {
  const compareArr = [
    ['R', 'T'],
    ['C', 'F'],
    ['J', 'M'],
    ['A', 'N'],
  ];

  const choiceObj = {
    1: 3,
    2: 2,
    3: 1,
    4: 0,
    5: 1,
    6: 2,
    7: 3,
  };

  const scoreObj = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  survey.forEach((item, idx) => {
    if (choices[idx] >= 5) {
      scoreObj[item[1]] += choiceObj[choices[idx]];
    } else {
      scoreObj[item[0]] += choiceObj[choices[idx]];
    }
  });

  return compareArr.reduce((acc, cur) => {
    acc += scoreObj[cur[0]] >= scoreObj[cur[1]] ? cur[0] : cur[1];
    return acc;
  }, '');
}