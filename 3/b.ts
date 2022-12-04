const input = await Deno.readTextFile('./input.txt')

const rucksacks = input.split('\r\n')

// Group rucksacks by groups of three elves
const groupsOfThreeElves: string[][] = []
for (let i = 0; i < rucksacks.length / 3; i++) {
  groupsOfThreeElves.push([
    rucksacks[i * 3],
    rucksacks[i * 3 + 1],
    rucksacks[i * 3 + 2],
  ])
}

const findCommonLetter = (arr: string[]) => {
  let result = ''
  const [firstElf, secondElf, thirdElf] = arr

  for (const i of firstElf) {
    if (secondElf.includes(i) && thirdElf.includes(i)) {
      result = i
    }
  }
  return result
}

// Convert letter to priority level
const convertLetterToPriorityLevel = (s: string) =>
  s === s.toLowerCase() ? s.charCodeAt(0) - 97 + 1 : s.charCodeAt(0) - 65 + 27

let response = 0

for (const i in groupsOfThreeElves) {
  response += convertLetterToPriorityLevel(
    findCommonLetter(groupsOfThreeElves[i])
  )
}
console.log(`Part Two: ${response} points.`)
console.log(`Test: ${response === 2641}`)
