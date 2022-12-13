import * as f from 'fs';
import * as readline from 'node:readline/promises';

const inputFile = './day10/input.txt';

const dayTenPuzzle = async () => {
    let inputInterface = readline.createInterface({
        input : f.createReadStream(inputFile)
    });
    let sixSignalStrengthsSum = 0;
    let puzzleTwoAnswer = 0;
    
    let cycle = 1;
    let registerX = 1;

    for await (let line of inputInterface) {
        let v = 0;
        if (line.startsWith('noop')) {
            cycle++;
        } else if (line.startsWith('addx')) {
            v += Number(line.split(' ')[1]);
            registerX += v;
            cycle += 2;
        }

        if ([20,60,100,140,180,220].indexOf(cycle) !== -1) {
            sixSignalStrengthsSum += (cycle * registerX);

        } else if ([21, 61, 101, 141, 181, 221].indexOf(cycle) !== -1) {
            sixSignalStrengthsSum += ((cycle - 1) * (registerX - v));
        }

        if (cycle >= 220) {
            break
        }
    }
    return [sixSignalStrengthsSum, puzzleTwoAnswer];
}

export default dayTenPuzzle;