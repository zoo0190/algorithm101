function solution(myString) {
    var answer = '';
    for(const str of myString) {
        if(str === 'a') {
            answer += str.toUpperCase()
        } else {
            if(str !== 'A' && str === str.toUpperCase()) {
            answer += str.toLowerCase()
        } else {
            	answer += str
        	}
        }
        
    }
    return answer;
}