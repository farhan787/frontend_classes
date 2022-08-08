// [1 - 34], [4 - 234]
const getRandomInRange = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const swapArrValues = (arr, index1, index2) => {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
};

/**
 *  random range = 2 - 12
 * 
 *  s = "ea"
 *  random = 8
 
*             0123456789012
  let word = 'eadaafreldmlz'
 *              i
 * 
 * 1. random index
 */

function scrambleWord(word) {
  // string is immutable, so converting it into an array for swapping elements
  word = word.split('');
  let scrambledWord = '';

  let swapIndex = 0;
  for (let i = 0; i < word.length; i++) {
    let randomIndex = getRandomInRange(word.length - 1, swapIndex);
    scrambledWord += word[randomIndex];
    str = swapArrValues(word, swapIndex, randomIndex);

    ++swapIndex;
  }
  return scrambledWord;
}

let cars = ['thar', 'scorpio', 'baleno', 'range rover', 'ferrari 599'];
cars.forEach((car) => {
  let finalScrambledWord = '';
  if (car.indexOf(' ') >= 0) {
    const carWords = car.split(' ');
    for (let word of carWords) {
      let scrambledWord = word;
      let containsDigit = word.match(/\d+/g) != null;
      if (!containsDigit) {
        scrambledWord = scrambleWord(word);
      }
      finalScrambledWord += scrambledWord + ' ';
    }
  } else {
    finalScrambledWord = scrambleWord(car);
  }
  console.log(finalScrambledWord);
});
