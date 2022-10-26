function solution(id_pw, db) {
    
    const dbToObj = Object.fromEntries(db)
    
    if(!dbToObj[id_pw[0]]) return 'fail'
    if(dbToObj[id_pw[0]] === id_pw[1]) return "login"
    if(dbToObj[id_pw[0]] !== id_pw[1]) return "wrong pw"
}