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
    let calculateSignalStrengthEarly = false;

    for await (let line of inputInterface) {
        // console.log(cycle, line)
        let v;
        if (line.startsWith('noop')) {
            if ([19, 59, 99, 139, 179, 219].indexOf(cycle) !== -1) {
                calculateSignalStrengthEarly = false;
            } 
            cycle++;
        } else if (line.startsWith('addx')) {
            if ([19, 59, 99, 139, 179, 219].indexOf(cycle) !== -1) {
                calculateSignalStrengthEarly = true;
            } 
            v = Number(line.split(' ')[1]);
            registerX += v;
            cycle += 2;

        }

        if ([20,60,100,140,180,220].indexOf(cycle) !== -1) {
            sixSignalStrengthsSum += (cycle * registerX);
            console.log(cycle, registerX, cycle * registerX);
            console.log(sixSignalStrengthsSum);

        }  else if ([21, 61, 101, 141, 181, 221].indexOf(cycle) !== -1) {
            sixSignalStrengthsSum += ((cycle - 1) * (registerX - v));
            console.log(cycle, registerX, cycle * registerX);
            console.log('bob')
        } else if (calculateSignalStrengthEarly) {
            sixSignalStrengthsSum += ((cycle + 1) * registerX);
            console.log(sixSignalStrengthsSum);
            console.log(cycle, registerX, (cycle + 1) * registerX);
            calculateSignalStrengthEarly = false;
        }

        if (cycle >= 220) {
            break
        }
    }
    return [sixSignalStrengthsSum, puzzleTwoAnswer];
}

export default dayTenPuzzle;