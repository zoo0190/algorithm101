function solution(my_string, num1, num2) {
    const arr = my_string.split('')
    const s1 = arr[num1]
    const s2 = arr[num2]
    
    arr[num2] = s1
    arr[num1] = s2
    return arr.join('');
}