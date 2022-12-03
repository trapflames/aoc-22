const input = await Deno.readTextFile('./input.txt')

const rucksacks = input.split('\r\n')

function findCommonLetters(arr: string[]) {
  const [pt1, pt2, pt3] = arr
  let result = ''
  const map: string[] = []

  for (const i of pt1) {
    if (!map.includes(i) && pt2.includes(i) && pt3.includes(i)) {
      result += '' + i
      map.push(i)
    }
  }
  console.log(pt1, pt2, pt3, result, map)

  return result
}

const alphaVal = (s: string) =>
  s === s.toLowerCase() ? s.charCodeAt(0) - 97 + 1 : s.charCodeAt(0) - 65 + 27

const dividedRucksacksByGroup: string[][] = []

for (let i = 0; i < rucksacks.length / 3; i++) {
  dividedRucksacksByGroup.push([
    rucksacks[i * 3],
    rucksacks[i * 3 + 1],
    rucksacks[i * 3 + 2],
  ])
}

console.log(dividedRucksacksByGroup)

let response = 0

for (const i in dividedRucksacksByGroup) {
  response += alphaVal(findCommonLetters(dividedRucksacksByGroup[i]))
}
console.log(response)
