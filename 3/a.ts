const input = await Deno.readTextFile('./input.txt')

const rucksacks = input.split('\r\n')

function findCommonLetters(arr: string[]) {
  const [pt1, pt2] = arr
  let result = ''
  const map: string[] = []

  for (const i of pt1) {
    if (!map.includes(i) && pt2.includes(i)) {
      result += '' + i
      map.push(i)
    }
  }
  //   console.log(pt1, pt2, result, map)

  return result
}

const alphaVal = (s: string) =>
  s === s.toLowerCase() ? s.charCodeAt(0) - 97 + 1 : s.charCodeAt(0) - 65 + 27

const dividedRucksacks = rucksacks.map((val) => [
  val.slice(0, val.length / 2),
  val.slice(val.length / 2),
])

console.log(dividedRucksacks)

let response = 0

for (const i in dividedRucksacks) {
  response += alphaVal(findCommonLetters(dividedRucksacks[i]))
}
console.log(response)
