function solution(todo_list, finished) {
    var answer = [];
    todo_list.forEach((_, i) => {
        if(!finished[i]) answer.push(todo_list[i])
    })
    return answer;
}