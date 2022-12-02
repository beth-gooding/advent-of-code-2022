import * as f from 'fs';
import * as readline from 'node:readline/promises';
import { isDeepStrictEqual } from 'util';

const inputFile = './day02/input.txt';

const dayTwoPuzzle = async () => {
    let inputInterface = readline.createInterface({
        input : f.createReadStream(inputFile)
    });
    let scoreTally = 0;
    for await (let roundStrategy of inputInterface) {
        if (roundStrategy[0] === 'A' && roundStrategy[2] === 'X') {
            scoreTally += (1 + 3);
        } else if (roundStrategy[0] === 'A' && roundStrategy[2] === 'Y') {
            scoreTally += (2 + 6);
        }  else if (roundStrategy[0] === 'A' && roundStrategy[2] === 'Z') {
            scoreTally += (3 + 0);
        }  else if (roundStrategy[0] === 'B' && roundStrategy[2] === 'X') {
            scoreTally += (1 + 0);
        }  else if (roundStrategy[0] === 'B' && roundStrategy[2] === 'Y') {
            scoreTally += (2 + 3);
        }  else if (roundStrategy[0] === 'B' && roundStrategy[2] === 'Z') {
            scoreTally += (3 + 6);
        }  else if (roundStrategy[0] === 'C' && roundStrategy[2] === 'X') {
            scoreTally += (1 + 6);
        }  else if (roundStrategy[0] === 'C' && roundStrategy[2] === 'Y') {
            scoreTally += (2 + 0);
        }  else if (roundStrategy[0] === 'C' && roundStrategy[2] === 'Z') {
            scoreTally += (3 + 3);
        } else {
            throw new Error('This strategy option does not follow the rules of the game.')
        }
    }
    return scoreTally;
}

export default dayTwoPuzzle;