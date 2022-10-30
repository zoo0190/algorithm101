function solution(dots) {
    var answer = 0;
    const xs = dots.map((item) => item[0])
    const ys = dots.map((item) => item[1])
    
    const maxX = Math.max(...xs)
    const minX = Math.min(...xs)
    
    const maxY = Math.max(...ys)
    const minY = Math.min(...ys)
    
    return Math.abs(maxX - minX) * Math.abs(maxY - minY);
}