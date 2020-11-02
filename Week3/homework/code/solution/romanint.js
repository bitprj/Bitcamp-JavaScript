// Roman to integer, (maybe) integer to string, re: https://leetcode.com/problems/roman-to-integer/

const letterVals = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};

// returns int from roman value, ex. XXVII: 27, XIV: 14
function romanToInt(romanString) {
  if (romanString === "") {
    return 0;
  }
  romanArr = romanString.split("");

  len = romanArr.length
  value = 0;
  romanArr.forEach((item, index) => {
    if (item === "I" && index + 1 < len &&
          (romanArr[index + 1] === "V" || romanArr[index + 1] === "X")) {
      // I can be placed before V (5) and X (10) to make 4 and 9
      value -= 2 * letterVals[item];
    } else if (item === "X" && index + 1 < len &&
          (romanArr[index + 1] === "L" || romanArr[index + 1] === "C")) {
        // X can be placed before L (50) and C (100) to make 40 and 90.
        value -= 2 * letterVals[item];
    } else if (item === "C" && index + 1 < len &&
          (romanArr[index + 1] === "D" || romanArr[index + 1] === "M")) {
      // C can be placed before D (500) and M (1000) to make 400 and 900
      value -= 2 * letterVals[item];
    }

    value += letterVals[item];

  });

  return value;

}

// console.log(romanToInt(""));
// console.log(romanToInt("I"));
// console.log(romanToInt("IV"));
// console.log(romanToInt("XIV"));
// console.log(romanToInt("XXVII"));







// returns words from int value, ex. 17: seventeen, 9: nine
function intToString(num) {
  return;
}
