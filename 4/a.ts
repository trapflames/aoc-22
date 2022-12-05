const input = await Deno.readTextFile('./input.txt')

const pairs = input
  .split('\r\n')
  //Divide each line by 2
  .map((val) => val.split(','))
  .map((val) => [val[0].split('-'), val[1].split('-')])
  .map((val) => [
    [+val[0][0], +val[0][1]],
    [+val[1][0], +val[1][1]],
  ])

console.log(pairs)

const fullyContainTest = (arr: number[][]): boolean => {
  const [[minFirst, maxFirst], [minSecond, maxSecond]] = arr

  const diffFirst = maxFirst - minFirst
  const diffSecond = maxSecond - minSecond

  //   console.log(minFirst, maxFirst, ' - Diff: ', diffFirst)
  //   console.log(minSecond, maxSecond, ' - Diff: ', diffSecond)

  if (maxFirst < minSecond || maxSecond < minFirst) return false

  if (diffFirst > diffSecond) {
    if (minFirst <= minSecond && maxFirst >= maxSecond) return true
  } else {
    if (minSecond <= minFirst && maxSecond >= maxFirst) return true
  }
  return false
}

const result = pairs.filter((value) => fullyContainTest(value))
console.log(result.length)

// const test = pairs[3]
// console.log('Testing Pair: ', test)
// console.log(fullyContainTest(test))
