import * as f from 'fs';
import * as readline from 'node:readline/promises';

const inputFile = './day05/input.txt';

const dayFivePuzzle = async () => {
    let inputInterface = readline.createInterface({
        input : f.createReadStream(inputFile)
    });

    let puzzleOneAnswer = 0;
    let puzzleTwoAnswer = 0;
    let counter = 0;
    for await (let line of inputInterface) {
        counter === 8 && console.log(line, line.split(''));
        counter++;
    }
    return [puzzleOneAnswer, puzzleTwoAnswer];
}

export default dayFivePuzzle;