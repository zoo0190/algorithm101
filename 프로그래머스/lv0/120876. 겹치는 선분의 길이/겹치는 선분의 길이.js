function overLap(arr1, arr2) {
  const arr = [];

  if (arr1[1] > arr2[0]) {
    const temp = [];
    temp.push(arr2[0]);
    if (arr1[1] <= arr2[1]) {
      temp.push(arr1[1]);
      arr.push(...temp);
    } else {
      temp.push(arr2[1]);
      arr.push(...temp);
    }
  }
  return arr;
}

function linesSort(lines) {
  lines.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  return lines;
}

function solution(lines) {
  const arr = [];
  const sortLines = linesSort(lines);
  const line1 = sortLines[0];
  const line2 = sortLines[1];
  const line3 = sortLines[2];

  arr.push(overLap(line1, line2));
  arr.push(overLap(line1, line3));
  arr.push(overLap(line2, line3));
  const filterArr = arr.filter((v) => v.length);
  if (filterArr.length === 0) return 0;
  if (filterArr.length === 1) return filterArr[0][1] - filterArr[0][0];
  if (filterArr.length === 2) {
    const sLines = linesSort(filterArr);
    const v = overLap(sLines[0], sLines[1]);
    if (v.length === 0) {
      return (
        filterArr[0][1] - filterArr[0][0] + (filterArr[1][1] - filterArr[1][0])
      );
    }
    if (sLines.length === 1) {
      return (
        filterArr[0][1] -
        filterArr[0][0] +
        (filterArr[1][1] - filterArr[1][0]) -
        v[1] -
        v[0]
      );
    }
  }
  if (filterArr.length === 3) {
    const sLines = linesSort(filterArr);
    const dupli = [];

    dupli.push(overLap(sLines[0], sLines[1]));
    dupli.push(overLap(sLines[0], sLines[2]));
    dupli.push(overLap(sLines[1], sLines[2]));

    if (dupli.length === 0)
      return (
        filterArr[0][1] -
        filterArr[0][0] +
        (filterArr[1][1] - filterArr[1][0]) +
        (filterArr[2][1] - filterArr[2][0])
      );
    if (dupli.length === 3)
      return (
        filterArr[0][1] -
        filterArr[0][0] +
        (filterArr[1][1] - filterArr[1][0]) +
        (filterArr[2][1] - filterArr[2][0]) -
        (dupli[0][1] - dupli[0][0]) * 2
      );
  }
}