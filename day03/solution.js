import * as f from 'fs';
import * as readline from 'node:readline/promises';

const inputFile = './day03/input.txt';

const dayThreePuzzle = async () => {
    let inputInterface = readline.createInterface({
        input : f.createReadStream(inputFile)
    });

    let alphabet = "abcdefghijklmnopqrstuvwxyz".concat("abcdefghijklmnopqrstuvwxyz".toUpperCase());

    let totalRucksackPriorities = 0;
    let totalGroupPriorities = 0;

    let counter = 0;
    let groupRucksacks = {
        elf1: [],
        elf2: [],
        elf3: []
    }

    for await (let rucksack of inputInterface) {
        const rucksackSize = rucksack.length;
        const firstCompartment = rucksack.substring(0, rucksackSize/2).split('');
        const secondCompartment = rucksack.substring(rucksackSize/2, rucksackSize).split('');

        for (let rucksackItem of firstCompartment) {
            if (secondCompartment.includes(rucksackItem)) {
                totalRucksackPriorities += (alphabet.indexOf(rucksackItem) + 1)
                break;
            }
        }

        // Puzzle 2: Keep track of the rucksack contents for the groups of three elves
        switch (counter % 3) {
            case 0:
                groupRucksacks.elf1 = rucksack;
                break;
            case 1:
                groupRucksacks.elf2 = rucksack;
                break;
            case 2:
                groupRucksacks.elf3 = rucksack;
                break;
        }
        

        // Only process the group when we have updated all three rucksacks
        if (counter % 3 === 2) {
            for (let rucksackOneItem of groupRucksacks.elf1) {
                if (groupRucksacks.elf2.includes(rucksackOneItem) && groupRucksacks.elf3.includes(rucksackOneItem)) {
                    totalGroupPriorities += (alphabet.indexOf(rucksackOneItem) + 1)
                    break;
                }
            }
        }

        counter++;
    }

    return [totalRucksackPriorities, totalGroupPriorities];
}

export default dayThreePuzzle;