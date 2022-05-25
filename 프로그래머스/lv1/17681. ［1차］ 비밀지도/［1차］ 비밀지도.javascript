function solution(n, arr1, arr2) {
  var answer = []
  const binaryArr1 = []
  const binaryArr2 = []
  for (let i of arr1) {
    binaryArr1.push(i.toString(2).padStart(n, '0'))
  }
  for (let i of arr2) {
    binaryArr2.push(i.toString(2).padStart(n, '0'))
  }

  for (let i = 0; i < n; i++) {
    let str = ''
    for (let j = 0; j < n; j++) {
      if (binaryArr1[i][j] === '0' && binaryArr2[i][j] === '0') {
        str += ' '
      } else {
        str += '#'
      }
    }
    answer.push(str)
  }
  return answer
}