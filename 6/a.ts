const input = await Deno.readTextFile('./input.txt')
const data = input.split('')

const BUFFER_SIZE = 4
let charMap = data.slice(0, BUFFER_SIZE)
let charSet = [...new Set(charMap)]
let startOfMessage = 0

const result = () => {
  for (let charIndex = 1; charIndex < data.length - BUFFER_SIZE; charIndex++) {
    if (charSet.length === BUFFER_SIZE) {
      startOfMessage = charIndex + BUFFER_SIZE - 1
      break
    }
    const start = charIndex
    const end = start + BUFFER_SIZE

    charMap = data.slice(start, end)
    charSet = [...new Set(charMap)]
  }
  return `The first start-of-packet marker is ${startOfMessage} ${
    startOfMessage === 1140 ? '✅' : '❌'
  }`
}

console.log(result())
