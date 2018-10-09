/************TABLE CREATION FUNCTIONS*************/

/**
 * @param {String} 
 * @returns {Array}
 * @description removes spaces, uppercase all words, maps to remove duplicates and returns keys
 * */

function removeDuplicates(str) {
  let str = str.replace(/\s/g, '').toUpperCase()
  return Object.keys(str.split("").reduce((obj, value) => ({ ...obj, [value]: 0 }), {}))
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
    matrix.push(alphabet.splice(0, 5))
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
  let checkStr = clearnStr.length % 2 === 0 ? clearnStr : `${clearnStr}Z`
  let pairsArr = []
  for (let i = 0; i < checkStr.length; i++) {
    if (i % 2 !== 0) {
      pairsArr.push(checkStr.slice(i - 1, i + 1))
    }
  }
  return pairsArr
}

/************CHECKING FUNCTIONS*************/

function mapIndexPairs(matrix, pairs) {
  let idx = []
  for(let i = 0; i < pairs.length; i++) {
    let coordinatesOne = findValue(matrix, pairs[i][0])
    let coordinatesTwo = findValue(matrix, pairs[i][1])
    let operation = checkType(coordinatesOne, coordinatesTwo)
    idx.push({coordinatesOne, coordinatesTwo, operation})
  }
  return idx
}

// REWRITE RECURSIVELY O(N) vs O(N^2)
function findValue(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if(arr[i][j] === value) return [i, j]
    }
  }
}

function checkType(list1, list2) {
  if(list1[0] === list2[0]) return 'row'
  if(list1[1] === list2[1]) return 'column'
  return 'matrix'
}

function getSubMatrix(list1, list2, matrix) {
  // let newlist1 = {coordinates:[list1[0], list2[1]], value: matrix[list1[0]][list2[1]]}
  let a = matrix[list1[0]][list2[1]]
  // let newlist2 = {coordinates:[list2[0], list1[1]], value: matrix[list2[0]][list1[1]]}
  let b = matrix[list2[0]][list1[1]]
  return {a, b}
}