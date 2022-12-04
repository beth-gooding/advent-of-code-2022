import dayOnePuzzle from "./day01/solution.js";
import dayTwoPuzzle from "./day02/solution.js";
import dayThreePuzzle from "./day03/solution.js";
import dayFourPuzzle from "./day04/solution.js";


dayOnePuzzle().then((answer) => {
    console.log();
    console.log("Day one puzzle solutions:");
    console.log(`The elf carrying the most calories has ${Math.max(...answer)} calories`);
    console.log(`The top three elves are carrying a total of ${answer[0] + answer[1] + answer[2]} calories`);
});

dayTwoPuzzle().then((answer) => {
    console.log();
    console.log("Day two puzzle solutions:");
    console.log(`My incorrect total rock-paper-scissors score will be ${answer[0]}`);
    console.log(`My correct total rock-paper-scissors score will be ${answer[1]}`);
});

dayThreePuzzle().then((answer) => {
    console.log();
    console.log("Day three puzzle solutions:");
    console.log(`The total priorities of the items found in both compartments of each rucksack is ${answer[0]}`);
    console.log(`The total priorities of the items found in all rucksacks of each group is ${answer[1]}`);
});

dayFourPuzzle().then((answer) => {
    console.log();
    console.log("Day four puzzle solutions:");
    console.log(`The number of pairs where one section assignment range is fully covered by another is ${answer[0]}`)
    console.log(`The number of pairs where the two assignment ranges overlap is ${answer[1]}`)
})