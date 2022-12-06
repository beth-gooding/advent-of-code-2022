import * as f from 'fs';
import * as readline from 'node:readline/promises';

const inputFile = './day06/input.txt';

const daySixPuzzle = async () => {
    let inputInterface = readline.createInterface({
        input : f.createReadStream(inputFile)
    });
    let buffer; 
    for await (let line of inputInterface) {
        buffer = line;
    }

    const processBuffer = (markerLength, bufferString) => {
        let marker = [];
        let markerCounter = 0;
        for (let character of bufferString) {
            markerCounter++;
            if (marker.length < markerLength) {
                marker.push(character);
            } else {
                marker.shift();
                marker.push(character);
            }
            let uniquePacketCharacters = [...new Set(marker)];
            if (uniquePacketCharacters.length === markerLength) {
                return markerCounter;
            }
        }
    }

    let packetMarkerIndex = processBuffer(4, buffer);
    let messageMarkerIndex = processBuffer(14, buffer);
    
    return [packetMarkerIndex, messageMarkerIndex];
}

export default daySixPuzzle;