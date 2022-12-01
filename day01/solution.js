import * as f from 'fs';
import * as readline from 'node:readline/promises';

const inputFile = './day01/input.txt';

const dayOnePuzzleOne = async () => {
    let inputInterface = readline.createInterface({
        input : f.createReadStream(inputFile)
    });
    let elfWithMostCaloriesTotal = 0;
    let currentElfCalories = 0;

    for await (let calorieAmount of inputInterface) {
        if (calorieAmount === '' && currentElfCalories > elfWithMostCaloriesTotal) {

            elfWithMostCaloriesTotal = currentElfCalories;
            currentElfCalories = 0;
        } else if (calorieAmount === '') {
            currentElfCalories = 0;
        } else {
            currentElfCalories += Number(calorieAmount);
        }
    }

    return elfWithMostCaloriesTotal;
}

export default dayOnePuzzleOne;