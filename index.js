// code your solution here

//  The function should receive 1 argument, an Array of JavaScript Objects
// Each object has two properties: year and result
// It should use find() to test each Object to see if the result is "W" — a win!
// It should return the year when the win occurred (if it occurred at all!)
// If no win is found, it should return, sadly, undefined

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"}
  ]

function isWin(element, index, array) {
    //element, in this case, is each object of the array
    //index, is the index of that element
    //the array is the entire list of items
    //we need to check inside each element for the result
    return element.result === "W";
}

const superbowlWin = record => {
    //automatically passing element, index, and array as the parameters
    //which means isWin has access to all these items
    const recordWin = record.find(isWin)
    let yrWin = recordWin === undefined ? undefined : recordWin.year

    return yrWin
}

console.log(superbowlWin(record))