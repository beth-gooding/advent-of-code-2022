import * as f from 'fs';
import * as readline from 'node:readline/promises';

const inputFile = './day06/input.txt';

const daySixPuzzle = async () => {
    let inputInterface = readline.createInterface({
        input : f.createReadStream(inputFile)
    });

    
    let puzzleOneAnswer = 0;
    let puzzleTwoAnswer = 0;


    for await (let line of inputInterface) {
        console.log("Day 6 lines: ", line);
    }

    return [puzzleOneAnswer, puzzleTwoAnswer];
}

export default daySixPuzzle;