function solution(n, slicer, num_list) {
    var answer = [];
    if(n === 1) return num_list.slice(0, slicer[1] + 1)
    if(n === 2) return num_list.slice(slicer[0])
    if(n === 3) return num_list.slice(slicer[0], slicer[1] + 1)
    if(n === 4) {
        for(let start = slicer[0]; start <= slicer[1]; start += slicer[2]) {
            answer.push(...num_list.slice(start, start + 1))
        }
    }
    return answer;
}