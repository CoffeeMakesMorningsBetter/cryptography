/************CREATION TABLE FUNCTIONS*************/ 

/**
 * @param {String} 
 * @returns {Array}
 * @description removes spaces, uppercase all words, maps to remove duplicates and returns keys
 * */ 

function removeDuplicates(str) {
  let str = str.replace(/\s/g, '').toUpperCase()
  return Object.keys(str.split("").reduce((obj,value) => ({...obj, [value]: 0}), {}))
}

/** 
 * @param {String} 
 * @returns {Array}
 * @description creates an array with the alphabet excluding Q
 * */ 

function createAlphaBet(str) {
  let alphabet = removeDuplicates(str)
  for (let i = 65; i <= 90; i++) {
    if (!alphabet.includes(String.fromCharCode(i)) && i !== 81) {
          alphabet.push(String.fromCharCode(i))
    }
  }
  return alphabet
}

/** 
 * @param {String} 
 * @returns {Array}
 * @description creates the 5 x 5 table
 * */ 

function createTable(str) {
  let alphabet = createAlphaBet(str)
  let matrix = []
  for (let i = 0; i < 5; i++) {
    matrix.push(alphabet.splice(0,5))
  }
  return matrix
}


