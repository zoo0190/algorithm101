function solution(players, callings) {
    // 순서
    const playerOrder = players.reduce((acc, cur, i) => {
        acc[cur] = i
        return acc
    }, {})

    // 순서 조정 및 players 배열 조정
    for (const calling of callings) {
    	const prev = playerOrder[calling] - 1;
    	const curr = playerOrder[calling];
        
    	[players[prev], players[curr]] = [players[curr], players[prev]];

    	playerOrder[players[prev]] = playerOrder[players[prev]] - 1;
    	playerOrder[players[curr]] = playerOrder[players[curr]] + 1;
    }
    
    return players;
}