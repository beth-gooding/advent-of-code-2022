import dayOnePuzzle from "./day01/solution.js";
import dayTwoPuzzle from "./day02/solution.js";
import dayThreePuzzle from "./day03/solution.js";
import dayFourPuzzle from "./day04/solution.js";
import dayFivePuzzle from "./day05/solution.js";
import daySixPuzzle from "./day06/solution.js";
import daySevenPuzzle from "./day07/solution.js";
import dayEightPuzzle from "./day08/solution.js";
import dayTenPuzzle from "./day10/solution.js";


await dayOnePuzzle().then((answer) => {
    console.log();
    console.log("Day one puzzle solutions:");
    console.log(`The elf carrying the most calories has ${Math.max(...answer)} calories`);
    console.log(`The top three elves are carrying a total of ${answer[0] + answer[1] + answer[2]} calories`);
});

await dayTwoPuzzle().then((answer) => {
    console.log();
    console.log("Day two puzzle solutions:");
    console.log(`My incorrect total rock-paper-scissors score will be ${answer[0]}`);
    console.log(`My correct total rock-paper-scissors score will be ${answer[1]}`);
});

await dayThreePuzzle().then((answer) => {
    console.log();
    console.log("Day three puzzle solutions:");
    console.log(`The total priorities of the items found in both compartments of each rucksack is ${answer[0]}`);
    console.log(`The total priorities of the items found in all rucksacks of each group is ${answer[1]}`);
});

await dayFourPuzzle().then((answer) => {
    console.log();
    console.log("Day four puzzle solutions:");
    console.log(`The number of pairs where one section assignment range is fully covered by another is ${answer[0]}`)
    console.log(`The number of pairs where the two assignment ranges overlap is ${answer[1]}`)
})

await dayFivePuzzle().then((answer) => {
    console.log();
    console.log("Day five puzzle solutions:");
    console.log(`The top crates of each stack using the CrateMover 9000 are ${answer[0]}`)
    console.log(`The top crates of each stack using the CrateMover 9001 are ${answer[1]}`)
})

await daySixPuzzle().then((answer) => {
    console.log();
    console.log("Day six puzzle solutions:");
    console.log(`The number of characters we need to process before we find the first packet marker is ${answer[0]}`)
    console.log(`The number of characters we need to process before we find the first message marker is ${answer[1]}`)
})

await daySevenPuzzle().then((answer) => {
    console.log();
    console.log("Day seven puzzle solutions:");
    console.log(`Not Solution: The sum of all the file sizes in total is ${answer[0]}`);
    console.log(`The solution to puzzle two is ${answer[1]}`);
})

await dayEightPuzzle().then((answer) => {
    console.log();
    console.log("Day eight puzzle solutions:");
    console.log(`The number of trees that are visible from outside the grid is ${answer[0]}`);
    console.log(`The biggest scenic score possible from this grid of trees is ${answer[1]}`);
})

await dayTenPuzzle().then((answer) => {
    console.log();
    console.log("Day ten puzzle solutions:");
    console.log(`The answer to puzzle 1 is ${answer[0]}`);
    console.log(`The answer to puzzle 2 is ${answer[1]}`);
})