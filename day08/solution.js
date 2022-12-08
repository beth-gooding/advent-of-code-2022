import * as f from 'fs';
import * as readline from 'node:readline/promises';

const inputFile = './day08/input.txt';

const dayEightPuzzle = async () => {
    let inputInterface = readline.createInterface({
        input : f.createReadStream(inputFile)
    });

    let puzzleTwoAnswer = 0;

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
    
    let numberOfVisibleTrees = (2*(treeMap.length + treeMap[0].length)) + internalVisibleTrees.length - 4;
    return [numberOfVisibleTrees, puzzleTwoAnswer];
}

export default dayEightPuzzle;