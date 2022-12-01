import dayOnePuzzle from "./day01/solution.js";


dayOnePuzzle().then((answer) => {
    console.log("Day one puzzle one solutions:");
    console.log(`The elf carrying the most calories has ${Math.max(...answer)} calories`)
    console.log(`The top three elves are carrying a total of ${answer[0] + answer[1] + answer[2]} calories`)
});