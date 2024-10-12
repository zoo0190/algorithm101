function solution(bandage, health, attacks) {
  const times = Array.from({ length: attacks[attacks.length - 1][0] }, (_, i) => i + 1)
  const attackTable = Object.fromEntries(attacks)
  let straightSuccess = 0
  const initHealth = health

  for (const currTime of times) {
    if (currTime in attackTable) {
      health = health - attackTable[currTime]
      straightSuccess = 0
    } else {
      health = health + bandage[1]
      straightSuccess += 1
      if (straightSuccess === bandage[0]) {
      	straightSuccess = 0
        health = health + bandage[2]
      }
    }
    if (health <= 0) {
      return -1
    }
    health = initHealth > health ? health : initHealth
  }
  return health
}
