function solution(friends, gifts) {
  const makeTable = friends.reduce((ac, cr) => {
    const exceptMe = friends.filter((v) => v !== cr)
    ac[cr] = exceptMe.reduce((acc, crr) => {
      acc[crr] = 0
      return { ...acc, exceptMe }
    }, { index: 0, next: 0 })
    return ac
  }, {})


  gifts.forEach((v) => {
    const [giver, taker] = v.split(' ')
    makeTable[giver][taker] += 1
    makeTable[giver].index += 1
    makeTable[taker].index -= 1
  })


  friends.forEach((v) => {
    let { exceptMe } = makeTable[v]
    exceptMe.forEach((j) => {
      if (makeTable[v][j] > makeTable[j][v]) {
        makeTable[v].next += 1
      }
      if (makeTable[v][j] === makeTable[j][v]) {
        if (makeTable[v].index > makeTable[j].index) {
          makeTable[v].next += 1
        }
      }
    })
  })

  return Math.max(...friends.map((v) => makeTable[v].next))
}
