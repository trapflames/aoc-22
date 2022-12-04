const input = await Deno.readTextFile('./input.txt')

const rucksacks = input
  .split('\r\n')
  //Divide each line by 2
  .map((val) => [val.slice(0, val.length / 2), val.slice(val.length / 2)])

// console.log(rucksacks)

const findCommonLetter = (arr: string[]): string => {
  let result = ''
  const [leftSide, rightSide] = arr

  for (const i of leftSide) {
    if (rightSide.includes(i)) {
      result = i
    }
  }
  return result
}

// Convert letter to priority level
const convertLetterToPriorityLevel = (s: string): number =>
  s === s.toLowerCase() ? s.charCodeAt(0) - 97 + 1 : s.charCodeAt(0) - 65 + 27

let response = 0

for (const i in rucksacks) {
  response += convertLetterToPriorityLevel(findCommonLetter(rucksacks[i]))
}
console.log(`Part One: ${response} points.`)
console.log(`Test: ${response === 8401}`)
