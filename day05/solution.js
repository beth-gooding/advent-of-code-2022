import * as f from 'fs';
import * as readline from 'node:readline/promises';

const inputFile = './day05/input.txt';

const dayFivePuzzle = async () => {
    let inputInterface = readline.createInterface({
        input : f.createReadStream(inputFile)
    });

    
    let topCrateForEachStackCrateMover9000 = "";
    let topCrateForEachStackCrateMover9001 = "";


    let stacks = [[],[],[],[],[],[],[],[],[]]
    let drawingInputInProgress = true;

    for await (let line of inputInterface) {
        
        if (drawingInputInProgress && line === " 1   2   3   4   5   6   7   8   9 ") {
            // this is the bottom line of the drawing so we should stop adding to the stacks array
            drawingInputInProgress = false;
            console.log("Original stack:", stacks)
        } else if (drawingInputInProgress) {
            // We're adding crates to the stack array
            let processedDrawing = line.split('');
            let stackNumber = 1;

            // We need to add the crates to the correct array within the stack array;
            for (let i = 0; i < processedDrawing.length; i++) {
                if (i % 4 === 2 && processedDrawing[i - 1] !== " ") {
                    stacks[stackNumber - 1].push(processedDrawing[i - 1])
                    stackNumber++;
                    continue;
                } else if (i % 4 === 2) {
                    stackNumber++;
                }
            }
            stacks
        } else if (line === "") {
            // A random blank line that we don't need to process;
            continue;
        } else {
            // This line must contain one step of the rearrangement procedure;
            let processedRearrangementProcedure = line.split(" ");
            for (let j = 0; j < processedRearrangementProcedure[1]; j++) {
                let movingCrate = stacks[processedRearrangementProcedure[3] - 1].shift(); 
                stacks[processedRearrangementProcedure[5] - 1].unshift(movingCrate);
            }
        }
    }

    for (let stack = 0; stack < stacks.length; stack++) {
        topCrateForEachStackCrateMover9000 += stacks[stack][0];
    }

    return [topCrateForEachStackCrateMover9000, topCrateForEachStackCrateMover9001];
}

export default dayFivePuzzle;