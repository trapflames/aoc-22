const input = await Deno.readTextFile('./input.txt')

const plays = input.split('\r\n')

const player1: string[] = []

const player2: string[] = []

plays.forEach((a) => {
  player1.push(a.split(' ')[0])
  player2.push(a.split(' ')[1])
})
// console.log(player1, player2)

const obj1: { [key: string]: number } = {
  A: 1,
  B: 2,
  C: 3,
}
const obj2: { [key: string]: number } = {
  X: 1,
  Y: 2,
  Z: 3,
}

function looseLetter(p1: string) {
  return p1 === 'A' ? 'Z' : p1 === 'B' ? 'X' : 'Y'
}
function winLetter(p1: string) {
  return p1 === 'A' ? 'Y' : p1 === 'B' ? 'Z' : 'X'
}
function drawLetter(p1: string) {
  return p1 === 'A' ? 'X' : p1 === 'B' ? 'Y' : 'Z'
}

function decideMove(p1: string, p2: string) {
  return p2 === 'X'
    ? looseLetter(p1)
    : p2 === 'Y'
    ? drawLetter(p1)
    : p2 === 'Z'
    ? winLetter(p1)
    : 'Z'
}

const newScore = player2.map((val, ind) => decideMove(player1[ind], val))

const evaluateWinner = (a: string, b: string) => {
  const shapePointsP1 = obj1[a]
  const shapePointsP2 = obj2[b]

  if (shapePointsP1 === shapePointsP2) {
    return [3 + shapePointsP1, 3 + shapePointsP2]
  } else if (
    (shapePointsP1 === 1 && shapePointsP2 === 3) ||
    (shapePointsP1 === 2 && shapePointsP2 === 1) ||
    (shapePointsP1 === 3 && shapePointsP2 === 2)
  ) {
    return [6 + shapePointsP1, shapePointsP2]
  } else {
    return [shapePointsP1, 6 + shapePointsP2]
  }
}

const playersTotalScore = [0, 0]

for (const i in player1) {
  const points = evaluateWinner(player1[i], newScore[i])
  playersTotalScore[0] += points[0]
  playersTotalScore[1] += points[1]
}

console.log(`* Part Two *
Total Score:
Player 1: ${playersTotalScore[0]} points.
Player 2: ${playersTotalScore[1]} points.
`)
