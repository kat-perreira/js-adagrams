


const Adagrams = {

  letterArray: ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z' ],

  drawLetters() {

    // Implement this method for wave 1
    const letters = [];
    let index = 0;
    for (let i = 0; i < this.letterArray.length; i += 1){
      letters[index] = this.letterArray[Math.floor(Math.random()*this.letterArray.length)];
      index += 1;

    }
    // console.log(letters.slice(1,11));
    return letters.slice(1,11);
  },

  usesAvailableLetters( input, lettersInHand ) {
    const inputArray = input.split("");
    let letterObject = {};


    for (let letter of lettersInHand ) {
      if (letterObject[letter]) {
        letterObject[letter] + 1;
      } else {
        letterObject[letter] = 1
        console.log(letterObject);
      }
    }

    for ( let input of inputArray ) {
        if (letterObject[input] < 1) {
          return false;
        } else if (letterObject[input] >= 1){
            letterObject[input] -= 1;
          }
        else {
          return false;
        }
      }
      return true;
    }

  };




// Do not remove this line or your tests will break!
export default Adagrams;
