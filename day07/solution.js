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
        if (line.startsWith('$')) {
            console.log('This line is a command', line);
        } else if (line.startsWith('dir')) {
            console.log('This line is a directory:', line);
        } else {
            console.log('This line is a file:', line);
            puzzleOneAnswer += Number(line.split(" ")[0]);
        }
    }


    return [puzzleOneAnswer, puzzleTwoAnswer];
}

export default daySevenPuzzle;