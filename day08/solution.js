import * as f from 'fs';
import * as readline from 'node:readline/promises';
import { compileFunction } from 'vm';

const inputFile = './day08/input.txt';

const dayEightPuzzle = async () => {
    let inputInterface = readline.createInterface({
        input : f.createReadStream(inputFile)
    });

    let biggestScenicScore = 0;

    let treeMap = [];

    for await (let line of inputInterface) {
        treeMap.push(line.split(''));
    }

    let internalVisibleTrees = [];

    for (let rowNumber = 1; rowNumber < treeMap.length -1; rowNumber++) {
        let row = treeMap[rowNumber];
        for (let i = 1; i < row.length -1 ; i++) {
            if (row.slice(0, i).filter(treeHeight => row[i] <= treeHeight).length === 0) {
                let coordinate = `(${rowNumber},${i})`;
                internalVisibleTrees.indexOf(coordinate) === -1 && internalVisibleTrees.push(coordinate);
            } 
            
            if (row.slice(i + 1, row.length).filter(treeHeight => row[i] <= treeHeight).length === 0) {
                let coordinate = `(${rowNumber},${i})`;
                internalVisibleTrees.indexOf(coordinate) === -1 && internalVisibleTrees.push(coordinate);
            }
        }
    }

    for (let column = 1; column < treeMap.length - 1; column++) {
        let treesInColumn = [];

        // collect all the trees that belong in a given column
        for ( let row = 0; row < treeMap.length; row++) {
            treesInColumn.push(treeMap[row][column]);
        }

        // now check left and right in each column, which refers to up and down respectively
        for (let j = 1; j < treesInColumn.length - 1; j++) {
            if (treesInColumn.slice(0, j).filter(treeHeight => treesInColumn[j] <= treeHeight).length === 0) {
                let coordinate = `(${j},${column})`;
                internalVisibleTrees.indexOf(coordinate) === -1 && internalVisibleTrees.push(coordinate);
            } 
            
            if (treesInColumn.slice(j + 1, treesInColumn.length).filter(treeHeight => treesInColumn[j] <= treeHeight).length === 0) {
                let coordinate = `(${j},${column})`;
                internalVisibleTrees.indexOf(coordinate) === -1 && internalVisibleTrees.push(coordinate);
            }
        }
    }

    // -4 so that you don't double count the corner trees
    let numberOfVisibleTrees = (2*(treeMap.length + treeMap[0].length)) + internalVisibleTrees.length - 4;

    for (let rowNumber = 1; rowNumber < treeMap.length - 1; rowNumber++) {
        for (let columnNumber = 1; columnNumber < treeMap[0].length - 1; columnNumber++) {
            let currentTree = treeMap[rowNumber][columnNumber];
            let visibilityInEachDirection = [];
            let leftVisibility = 0;
            let rightVisibility = 0;
            let upVisibility = 0;
            let downVisibility = 0;

            for (let moveLeft = 1; moveLeft <= columnNumber; moveLeft++) {
                if (treeMap[rowNumber][columnNumber - moveLeft] < currentTree) {
                    leftVisibility++;
                } else {
                    visibilityInEachDirection.push(leftVisibility);
                    break;
                }

                if (moveLeft === columnNumber) {
                    visibilityInEachDirection.push(leftVisibility);
                }
            }

            for (let moveRight = 1; moveRight < treeMap[0].length - (columnNumber); moveRight++) {
                if (treeMap[rowNumber][columnNumber + moveRight] < currentTree) {
                    rightVisibility++;
                } else {
                    visibilityInEachDirection.push(rightVisibility);
                    break;
                }

                if (moveRight === treeMap[0].length - (columnNumber) - 1) {
                    visibilityInEachDirection.push(rightVisibility);
                }
            }

            for (let moveUp = 1; moveUp <= rowNumber; moveUp++) {
                if (treeMap[rowNumber - moveUp][columnNumber] < currentTree) {
                    upVisibility++;
                } else {
                    visibilityInEachDirection.push(upVisibility);
                    break;
                }

                if (moveUp === rowNumber) {
                    visibilityInEachDirection.push(upVisibility);
                }
            }
            
            for (let moveDown = 1; moveDown < (treeMap.length - (rowNumber)); moveDown++) {
                if (treeMap[rowNumber + moveDown][columnNumber] < currentTree) {
                    downVisibility++;
                } else {
                    visibilityInEachDirection.push(downVisibility);
                    break;
                }

                if (moveDown === (treeMap.length - (1 + rowNumber))) {
                    visibilityInEachDirection.push(downVisibility);
                }
            }

            let currentTreeScenicScore = visibilityInEachDirection.reduce((a,b) => a*b, 1);
            if (currentTreeScenicScore > biggestScenicScore) {
                biggestScenicScore = currentTreeScenicScore;
            }
        }

    }
    return [numberOfVisibleTrees, biggestScenicScore];
}

export default dayEightPuzzle;