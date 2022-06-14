function solution(skill, skill_trees) {
  const toArr = skill.split('')
  let result = 0
  let toStr = ''
  for (let i = 0; i < skill_trees.length; i++) {
    toStr = skill_trees[i].split('').filter(value => toArr.includes(value)).join('')
    if (toStr === skill.substring(0, toStr.length)) {
      result++
    }
  }
  return result
}