import * as f from 'fs';
import * as readline from 'node:readline/promises';

const inputFile = './day07/input.txt';

const daySevenPuzzle = async () => {
    let inputInterface = readline.createInterface({
        input : f.createReadStream(inputFile)
    });

    
    let puzzleOneAnswer = 0;
    let puzzleTwoAnswer = 0;


    for await (let line of inputInterface) {
        console.log(line);
    }


    return [puzzleOneAnswer, puzzleTwoAnswer];
}

export default daySevenPuzzle;