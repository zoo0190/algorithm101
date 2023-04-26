function solution(code) {
    var answer = '';
    let mode = 0
    
    code.split('').forEach((v, idx) => {
       	if(v === '1') {
            if(mode === 0 ) {
                mode = 1
            } else {
                mode = 0
            }
        }
        if (v !== '1') {
            if(idx % 2 === 0 && mode === 0) {
                answer += code[idx]
            } 
            if(idx % 2 === 1 && mode === 1) {
                answer += code[idx]
            }
        }
    
    })
    return answer ? answer : 'EMPTY';
}