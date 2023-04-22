const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
   	let result = ''
    for(st of str) {
        const upper = st.toUpperCase()
        upper === st ? result += st.toLowerCase() : result += upper 
    }
    console.log(result)
});