/************TABLE CREATION FUNCTIONS*************/ 

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
 * @description creates an array with the alphabet excluding Q in order starting with word then rest of alphabet
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

/************PAIR CREATION FUNCTION*************/ 

/** 
 * @param {String} 
 * @returns {Array}
 * @description In a playfair cipher the message is split into digraphs, pairs of two letters. If there is an odd number of letters, a Z is added to the last letter. removes spaces and uppercase
 * */ 

 function pairs(str) {
    let clearnStr = str.replace(/\s/g, '').toUpperCase()
    let checkStr = clearnStr.length % 2 === 0 ? clearnStr: `${clearnStr}Z`
    let pairsArr = []
    for (let i = 0; i < checkStr.length; i++) {
      if(i % 2 !== 0) {
        pairsArr.push(checkStr.slice(i-1,i+1))
      }
    }
    return pairsArr
 }

 /************CHECKING FUNCTIONS*************/ 

// NOT ON SAME ROW OR COLUMN FUNCTION
// CREATE AND RETURN SUBMATRIX 

// COLUMN FUCTION
  // RETURN ARRAY?
  // USE RECURSION OR NOT? WHATS MY BASE CASE?
  // WHERE DO I START?

// ROW FUNCTION
  // RETURN ARRAY?
  // WHATS MY BASE CASE? USE RECURSION OR NOT?
  // WHERE DO I START?

  // get coordinates of both first ie: find them