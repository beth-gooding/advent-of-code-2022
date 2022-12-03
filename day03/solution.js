import * as f from 'fs';
import * as readline from 'node:readline/promises';

const inputFile = './day03/input.txt';

const dayThreePuzzle = async () => {
    let inputInterface = readline.createInterface({
        input : f.createReadStream(inputFile)
    });
    let alphabet = "abcdefghijklmnopqrstuvwxyz".concat("abcdefghijklmnopqrstuvwxyz".toUpperCase());
    let totalPriorities = 0;

    for await (let rucksack of inputInterface) {
        const rucksackSize = rucksack.length;
        const firstCompartment = rucksack.substring(0, rucksackSize/2).split('');
        const secondCompartment = rucksack.substring(rucksackSize/2, rucksackSize).split('');

        for (let rucksackItem of firstCompartment) {
            if (secondCompartment.includes(rucksackItem)) {
                totalPriorities += (alphabet.indexOf(rucksackItem) + 1)
                break;
            }
        }
    }
    return totalPriorities;
}

export default dayThreePuzzle;