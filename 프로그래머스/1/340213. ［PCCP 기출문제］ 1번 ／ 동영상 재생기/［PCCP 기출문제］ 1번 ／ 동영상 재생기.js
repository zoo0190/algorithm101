function solution(video_len, pos, op_start, op_end, commands) {
  const convertToSecond = (val) => {
    const [minute, second] = val.split(":")
    return +minute * 60 + + second
  }

  const opDiff = (start, end, curr) => {
    if (curr >= start && curr <= end) {
      return end
    }
    return curr
  }

  const formatToStr = (num) => {
    return num >= 0 & num <= 9 ? 0 + num.toString() : num.toString()
  }

  const videoLenSecond = convertToSecond(video_len)
  const opStartSecond = convertToSecond(op_start)
  const opEndSecond = convertToSecond(op_end)
  const posSecond = opDiff(opStartSecond, opEndSecond, convertToSecond(pos))

  const result = commands.reduce((ac, cr) => {
    if (cr === "next") {
      ac += 10
      if (ac >= videoLenSecond) {
        ac = videoLenSecond
      }
    }

    if (cr === "prev") {
      ac -= 10
      if (ac <= 0) {
        ac = 0
      }
    }

    ac = opDiff(opStartSecond, opEndSecond, ac)

    return ac
  }, posSecond)

  const [share, remainder] = [Math.floor(result / 60), result % 60]

  return `${formatToStr(share)}:${formatToStr(remainder)}`
}
