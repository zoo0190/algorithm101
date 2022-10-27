function solution(hp) {
    const generalAnt = parseInt(hp / 5)
    
    const soldierAnt = parseInt((hp % 5) / 3)
    const ant = hp % 5 % 3
    
    return generalAnt + soldierAnt + ant;
}