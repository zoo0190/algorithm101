function solution(denum1, num1, denum2, num2) {
    var answer = [];
    
    const lcm = num1 * num2 / gcd(num1, num2)
    const numerator = parseInt(lcm / num1) * denum1 + parseInt(lcm / num2) * denum2
    const gcdVal = gcd(numerator, lcm)

    return [numerator / gcdVal, lcm / gcdVal];
}

const gcd = (num1, num2) => {
    if (num2 > num1) [num1, num2] = [num2, num1];
    const remain = num1 % num2;

    return remain ? gcd(num2, remain) : num2;
};
