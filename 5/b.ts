const input = await Deno.readTextFile('./input.txt')

const initialState = input
  .split('\r\n')
  .map((val) => val.split('    '))
  .map((val) => val.map((el) => el.split(' ')).flat())

const numberOfStacks = initialState[0].length
const maxStackLength = initialState.findIndex(([, el]) => el === '1')
const stacks: string[][] = []

for (let i = 0; i < numberOfStacks; i++) {
  const pile: string[] = []
  for (let j = 0; j < maxStackLength; j++) {
    if (initialState[j][i] !== '') pile.push(initialState[j][i])
  }
  stacks.push(pile)
}

const instructions = [...initialState]
  .slice(maxStackLength + 2)
  .map((val) => val.filter(Number).map((el) => Number(el)))

console.log(`Number of Stacks: ${numberOfStacks}
Max Initial Stack Length: ${maxStackLength}
`)

instructions.forEach(([numberOfCrates, fromStack, toStack]) => {
  // Remove top crates from selected stack (fromStack) and copy the removed top crates to new Array
  // Reverse the copy to be able to stack on top of the other stack, LIFO - Last In First Out
  const cratesToMove = stacks[fromStack - 1].splice(0, numberOfCrates)
  stacks[toStack - 1].unshift(...cratesToMove)
})

const result = stacks
  .map((val) => val[0].replaceAll('[', '').replaceAll(']', ''))
  .join('')

console.log(`Final Answer: ${result}`)
