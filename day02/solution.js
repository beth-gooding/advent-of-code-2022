import * as f from 'fs';
import * as readline from 'node:readline/promises';

const inputFile = './day02/input.txt';

const dayTwoPuzzle = async () => {
    let inputInterface = readline.createInterface({
        input : f.createReadStream(inputFile)
    });
    let incorrectScoreTally = 0;
    let correctScoreTally = 0;
    for await (let roundStrategy of inputInterface) {
        if (roundStrategy[0] === 'A' && roundStrategy[2] === 'X') {
            incorrectScoreTally += (1 + 3);
            correctScoreTally += (3 + 0);
        } else if (roundStrategy[0] === 'A' && roundStrategy[2] === 'Y') {
            incorrectScoreTally += (2 + 6);
            correctScoreTally += (1 + 3);
        }  else if (roundStrategy[0] === 'A' && roundStrategy[2] === 'Z') {
            incorrectScoreTally += (3 + 0);
            correctScoreTally += (2 + 6);
        }  else if (roundStrategy[0] === 'B' && roundStrategy[2] === 'X') {
            incorrectScoreTally += (1 + 0);
            correctScoreTally += (1 + 0);
        }  else if (roundStrategy[0] === 'B' && roundStrategy[2] === 'Y') {
            incorrectScoreTally += (2 + 3);
            correctScoreTally += (2 + 3);
        }  else if (roundStrategy[0] === 'B' && roundStrategy[2] === 'Z') {
            incorrectScoreTally += (3 + 6);
            correctScoreTally += (3 + 6);
        }  else if (roundStrategy[0] === 'C' && roundStrategy[2] === 'X') {
            incorrectScoreTally += (1 + 6);
            correctScoreTally += (2 + 0);
        }  else if (roundStrategy[0] === 'C' && roundStrategy[2] === 'Y') {
            incorrectScoreTally += (2 + 0);
            correctScoreTally += (3 + 3);
        }  else if (roundStrategy[0] === 'C' && roundStrategy[2] === 'Z') {
            incorrectScoreTally += (3 + 3);
            correctScoreTally += (1 + 6);
        } else {
            throw new Error('This strategy option does not follow the rules of the game.')
        }
    }
    return [incorrectScoreTally, correctScoreTally];
}

export default dayTwoPuzzle;