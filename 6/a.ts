const input = await Deno.readTextFile('./input.txt')
const chars = input.split('')

const DIFF_NUM = 4

for (let i = 0; i < chars.length - DIFF_NUM; i++) {
  const charsToSet = new Set(chars.slice(i, i + DIFF_NUM))
  if (charsToSet.size === DIFF_NUM) {
    console.log(
      `Start Message: ${i + DIFF_NUM} ${i + DIFF_NUM === 1140 ? '✅' : '❌'}`
    )
    break
  }
}
