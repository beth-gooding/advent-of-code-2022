import * as f from 'fs';
import * as readline from 'node:readline/promises';

const inputFile = './day04/input.txt';

const dayFourPuzzle = async () => {
    let inputInterface = readline.createInterface({
        input : f.createReadStream(inputFile)
    });

    let totalRangeCoveredPairs = 0;
    let totalSomeOverlapPairs = 0;

    for await (let sectionAssignments of inputInterface) {
        let sectionAssignmentsArray = sectionAssignments.split(/[-,]+/);
        const firstRangeMin = Number(sectionAssignmentsArray[0]);
        const firstRangeMax = Number(sectionAssignmentsArray[1]);
        const secondRangeMin = Number(sectionAssignmentsArray[2]);
        const secondRangeMax = Number(sectionAssignmentsArray[3]);
        
        if (firstRangeMin <= secondRangeMin && firstRangeMax >= secondRangeMax) {
            totalRangeCoveredPairs++;
            totalSomeOverlapPairs++;
        } else if (secondRangeMin <= firstRangeMin && secondRangeMax >= firstRangeMax) {
            totalRangeCoveredPairs++;
            totalSomeOverlapPairs++;
        } else if (firstRangeMin <= secondRangeMin && firstRangeMax >= secondRangeMin) {
            totalSomeOverlapPairs++;
        } else if (secondRangeMin <= firstRangeMin && secondRangeMax >= firstRangeMin) {
            totalSomeOverlapPairs++;
        }
    }

    return [totalRangeCoveredPairs, totalSomeOverlapPairs];
}

export default dayFourPuzzle;