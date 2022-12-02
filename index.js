import dayOnePuzzle from "./day01/solution.js";
import dayTwoPuzzle from "./day02/solution.js";


dayOnePuzzle().then((answer) => {
    console.log()
    console.log("Day one puzzle solutions:");
    console.log(`The elf carrying the most calories has ${Math.max(...answer)} calories`)
    console.log(`The top three elves are carrying a total of ${answer[0] + answer[1] + answer[2]} calories`)
});

dayTwoPuzzle().then((answer) => {
    console.log()
    console.log("Day two puzzle solutions:");
    console.log(`My incorrect total rock-paper-scissors score will be ${answer[0]}`);
    console.log(`My correct total rock-paper-scissors score will be ${answer[1]}`)
});