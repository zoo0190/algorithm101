function solution(quiz) { 
    const answer = quiz.map((item) => {
        const [formula, result] = item.split('=')
        return eval(formula) === +result ? "O" : "X"
    })
    return answer;
}