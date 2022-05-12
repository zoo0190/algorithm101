process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for (let i = 0; i < b; i++) {
        let result = ''
        for (let l = 0; l < a; l++) {
            result = result + "*"
        }
        console.log(result)
    }
});