/**
 * @param {String} [str = ""]
 * @returns {Array}
 * */ 

function removeDuplicates(str) {
  return Object.keys(str.split("").reduce((obj,value) => ({...obj, [value]: 0}), {}))
}