import * as f from 'fs';
import * as readline from 'node:readline/promises';

const inputFile = './day01/input.txt';

const dayOnePuzzle = async () => {
    let inputInterface = readline.createInterface({
        input : f.createReadStream(inputFile)
    });
    let topThreeElvesWithMostCaloriesTotal = [0, 0, 0];
    let currentElfCalories = 0;
    
    for await (let calorieAmount of inputInterface) {
    let thirdHighestCalories = Math.min(...topThreeElvesWithMostCaloriesTotal);
        if (calorieAmount === '' && currentElfCalories > thirdHighestCalories) {
            topThreeElvesWithMostCaloriesTotal.splice(topThreeElvesWithMostCaloriesTotal.indexOf(thirdHighestCalories), 1, currentElfCalories);
            currentElfCalories = 0;
        } else if (calorieAmount === '') {
            currentElfCalories = 0;
        } else {
            currentElfCalories += Number(calorieAmount);
        }
    }

    return topThreeElvesWithMostCaloriesTotal;
}

export default dayOnePuzzle;