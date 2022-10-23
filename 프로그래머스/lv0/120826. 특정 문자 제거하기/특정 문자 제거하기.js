function solution(my_string, letter) {
    var answer = '';
    const rgx = new RegExp(letter, 'g')
    return my_string.replace(rgx, '');
}