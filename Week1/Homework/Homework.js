// FizzBuzz In SPACE
const argumentValue = process.argv[2];
const numericValue = Number(argumentValue);

// For every number 1 ... numericValue:
var i;
for (i = 1; i <= numericValue; i ++) {
  // if number is divisible by 3 but not 5, print 👽
  if (i % 3 == 0 && i % 5 != 0) {
    console.log("👽 " + i);

  // if number is divisible by 5 but not 3, print 🚀
  } else if (i % 5 == 0 && i % 3 != 0) {
    console.log("🚀 " + i);

  // if number is divisible by both 3 and 5, print 🛰
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log("🛰 " + i);

    //adding something so i can try to push this thing
  // if number is not divisible by either 3 or 5, print 💩
  } else {
    console.log("💩 " + i);
  }
}
