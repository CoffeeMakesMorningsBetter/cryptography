/************HELPER FUNCTIONS*************/ 

/** 
 * @param {String} 
 * @returns {Array}
 * @description creates an array of objects with the corresponding index(starting at 0) position of the alphabet
 * */ 

function mapWordsToIndex(word) {
  let position = []
  for (let i = 0; i < word.length; i++) {
    let value = (90 + word.charCodeAt(i) + 1) % 26
    position.push({letter: word[i], idxValue: value}) 
  }
  return position
}

/** 
 * @param {Number} [value = null]
 * @returns {Array}
 * @description creates an array of objects with letter and corresponding letter based on value(ie number of shifts)
 * */ 

function createAlphabet(value = null) {
  let shiftValue = value === null ? 0: value
  let arr = []
  for (let i = 65; i <= 90; i++) {
    let name = String.fromCharCode(i)
    let encoded = String.fromCharCode(((i-65)+shiftValue)% 26 + 65)
    arr.push({name:name, encoded: encoded})
  }
  return arr
}

/**
 * @param {String}
 * @returns {Boolean}
 * @description checks to ensure letter is uppercase with a defined boundary
 */

function checkValidInput(str) {
  let regex = /^[^a-z]*$/
  return regex.test(str) && str.length >= 3 && str.length <= 8
}

export {
  mapWordsToIndex,
  createAlphabet,
  checkValidInput
}