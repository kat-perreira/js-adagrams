


const Adagrams = {

  letterArray: [
   'A', 'A', 'A', 'A', 'A', 'A',
   'A', 'A', 'A', 'B', 'B', 'C',
   'C', 'D', 'D', 'D', 'D', 'E',
   'E', 'E', 'E', 'E', 'E', 'E',
   'E', 'E', 'E', 'E', 'E', 'F',
   'F', 'G', 'G', 'G', 'H', 'H',
   'I', 'I', 'I', 'I', 'I', 'I',
   'I', 'I', 'I', 'J', 'K', 'L',
   'L', 'L', 'L', 'M', 'M', 'N',
   'N', 'N', 'N', 'N', 'N', 'O',
   'O', 'O', 'O', 'O', 'O', 'O',
   'O', 'P', 'P', 'Q', 'R', 'R',
   'R', 'R', 'R', 'R', 'S', 'S',
   'S', 'S', 'T', 'T', 'T', 'T',
   'T', 'T', 'U', 'U', 'U', 'U',
   'V', 'V', 'W', 'W', 'X', 'Y',
   'Y', 'Z' ],

  drawLetters() {

    // Implement this method for wave 1
    const letters = [];
    for (let i = 0; i < this.letterArray.length; i += 1){
      letters[i] = this.letterArray[Math.floor(Math.random()*this.letterArray.length)];
      i += 1;

    }
    // console.log(letters.slice(1,11));
    // let rand = letterArray[Math.floor(Math.random() * letterArray.length)];
    return letters.slice(0,10);
  },

  usesAvailableLetters( input, lettersInHand ) {
    const inputArray = input.split("");
    let letterObject = {};


    for (let letter of lettersInHand ) {
      if (letterObject[letter]) {
        letterObject[letter] += 1;
      } else {
        letterObject[letter] = 1;
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
  },

  scoreWord(word) {
    const letterScores = {
      "A": 1,
      "E": 1,
      "I": 1,
      "O": 1,
      "U": 1,
      "L": 1,
      "N": 1,
      "R": 1,
      "S": 1,
      "T": 1,
      "D": 2,
      "G": 2,
      "B": 3,
      "C": 3,
      "M": 3,
      "P": 3,
      "F": 4,
      "H": 4,
      "V": 4,
      "W": 4,
      "Y": 4,
      "K": 5,
      "J": 8,
      "X": 8,
      "Q": 10,
      "Z": 10
    }

    let totalScore = 0;
    const letters = word.toUpperCase();
    // const upperLetters = letters.split("");

    for ( let letter of letters ) {
      totalScore += letterScores[letter];
    }

    if (letters.length > 6) {
      totalScore += 8;
    }
    return totalScore;
  },

  breakTie(incumbent, challenger) {

    if ( incumbent.word.length == 10) {
      return incumbent;
    } else if (challenger.word.length == 10) {
      return challenger;
    } else if (challenger.word.length < incumbent.word.length) {
      return challenger;
    } else {
      return incumbent;
    }
  },


  highestScoreFrom (words) {

    let scoreObjects = [];

    for (let wordy of words) {
      const tempObject = {
        'word': wordy,
        'score': this.scoreWord(wordy)
      };

      scoreObjects.push(tempObject);
    }

    // console.log(scoreObjects);

    let winningObject = scoreObjects[Object.keys(scoreObjects)[0]];

    for ( let hash of scoreObjects ) {
      if (hash.score > winningObject.score) {
        winningObject = hash;
      } else if (hash.score ==  winningObject.score){

        winningObject = this.breakTie(winningObject, hash);

      }
    }
    return winningObject;
  }

};




// Do not remove this line or your tests will break!
export default Adagrams;
