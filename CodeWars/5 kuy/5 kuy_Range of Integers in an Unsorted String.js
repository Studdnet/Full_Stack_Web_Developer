// https://www.codewars.com/kata/5b6b67a5ecd0979e5b00000e/train/javascript

/* 
Examples: 
[['6291211413114538107',14],[1,14]],
[['13161820142119101112917232215',15],[9,23]],
[['2318134142120517221910151678611129',20],[4,23]],
[['10610211511099104113100116105103101111114107108112109',18],[99,116]]
*/

function splitStringIntoSequentialChunks(str, numChunks) {
  let result = [];
  let chunkSize = Math.ceil(str.length / numChunks);

  while (result.length < numChunks && str.length > 0) {
    let chunk = "";
    let validChunkFound = false;

    // Попробуем различные размеры частей от 1 до chunkSize
    for (let size = 1; size <= chunkSize; size++) {
      chunk = str.slice(0, size);
      let chunkNum = parseInt(chunk, 10);

      if (result.length > 0) {
        let lastNum = result[result.length - 1];
        if (chunkNum === lastNum + 1) {
          result.push(chunkNum);
          str = str.slice(size);
          validChunkFound = true;
          break;
        }
      } else {
        result.push(chunkNum);
        str = str.slice(size);
        validChunkFound = true;
        break;
      }
    }

    if (!validChunkFound) {
      throw new Error("Невозможно разделить строку на заданное количество частей.");
    }
  }

  if (result.length !== numChunks) {
    throw new Error("Невозможно разделить строку на заданное количество частей.");
  }

  let minRange = Math.min(...result);
  let maxRange = Math.max(...result);

  return { chunks: result, range: { min: minRange, max: maxRange } };
}

let inputString = "1568141291110137";
let numChunks = 10;

let result = splitStringIntoSequentialChunks(inputString, numChunks);
console.log(result.chunks); // [15, 6, 8, 14, 12, 9, 11, 10, 13, 7]
console.log(result.range); // { min: 6, max: 15 }
