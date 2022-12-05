import * as f from 'fs';
import * as readline from 'node:readline/promises';

const inputFile = './day05/input.txt';

const dayFivePuzzle = async () => {
    let inputInterface = readline.createInterface({
        input : f.createReadStream(inputFile)
    });

    
    let topCrateForEachStackCrateMover9000 = "";
    let topCrateForEachStackCrateMover9001 = "";


    let stacksForCrateMover9000 = [[],[],[],[],[],[],[],[],[]];
    let stacksForCrateMover9001 = [[],[],[],[],[],[],[],[],[]];
    let drawingInputInProgress = true;

    for await (let line of inputInterface) {
        if (drawingInputInProgress && line === " 1   2   3   4   5   6   7   8   9 ") {
            // this is the bottom line of the drawing so we should stop adding to the stacks array
            drawingInputInProgress = false;
        } else if (drawingInputInProgress) {
            // We're adding crates to the stack array
            let processedDrawing = line.split('');
            let stackNumber = 1;

            // We need to add the crates to the correct array within the stack array;
            for (let i = 0; i < processedDrawing.length; i++) {
                if (i % 4 === 2 && processedDrawing[i - 1] !== " ") {
                    stacksForCrateMover9000[stackNumber - 1].push(processedDrawing[i - 1]);
                    stacksForCrateMover9001[stackNumber - 1].push(processedDrawing[i - 1]);
                    stackNumber++;
                    continue;
                } else if (i % 4 === 2) {
                    stackNumber++;
                }
            }
        } else if (line === "") {
            // A random blank line that we don't need to process;
            continue;
        } else {
            
            // This line must contain one step of the rearrangement procedure;
            let processedRearrangementProcedure = line.split(" ");
            let movingCrates9001 = [];
            for (let j = 0; j < processedRearrangementProcedure[1]; j++) {
                // remove the crate from 9000 crane method and save it
                let movingCrate9000 = stacksForCrateMover9000[processedRearrangementProcedure[3] - 1].shift();
                
                // remove the crate from 9001 crane method and save it
                let movingCrate9001 = stacksForCrateMover9001[processedRearrangementProcedure[3] - 1].shift(); 
                
                // add the 9000 crane crate to the top of the stack
                stacksForCrateMover9000[processedRearrangementProcedure[5] - 1].unshift(movingCrate9000);
                
                // save the 9001 method crate to a temporary array to be added to the 9001 stack all together
                movingCrates9001.push(movingCrate9001);
            }

            // add all of the crates moving using the 9001 crane method to the top of the stack
            stacksForCrateMover9001[processedRearrangementProcedure[5] - 1].unshift(...movingCrates9001);
        }

    }

    for (let stack = 0; stack < stacksForCrateMover9000.length; stack++) {
        topCrateForEachStackCrateMover9000 += stacksForCrateMover9000[stack][0];
        topCrateForEachStackCrateMover9001 += stacksForCrateMover9001[stack][0];
    }
    return [topCrateForEachStackCrateMover9000, topCrateForEachStackCrateMover9001];
}

export default dayFivePuzzle;