function solution(arr) {
    while(arr.length !== 1) {
        const val = arr.splice(0, 2);
        arr = [(val[0] * val[1]) / gcd(...val), ...arr];
    }

    return arr[0];
}

const gcd = (num1, num2) => {
  if (num2 > num1) [num1, num2] = [num2, num1];
  const remain = num1 % num2;

  return remain ? gcd(num2, remain) : num2;
};

