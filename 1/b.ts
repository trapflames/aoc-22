const input = await Deno.readTextFile("./input.txt");

const map = input.split("\r\n")

const totalCaloriesPerElf:number[] = [0]

let elvesIndex = 0

for(const i of map){
    if(i === ""){
        elvesIndex++
        totalCaloriesPerElf[elvesIndex] = 0
    } else{
        totalCaloriesPerElf[elvesIndex] += Number(i)
    }
}

export const sortedElvesByCalories = [...totalCaloriesPerElf].sort((a,b) => b - a )


// Part Two: Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?
let answerTwo = 0
for(let i = 0; i < 3; i++) answerTwo += sortedElvesByCalories[i]
console.log(`Part Two: Top 3 Elves have ${answerTwo} calories.`)