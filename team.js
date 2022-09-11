// const romanNumber = [
//   [1000, "M"],
//   [900, "CM"],
//   [500, "D"],
//   [400, "CD"],
//   [100, "C"],
//   [90, "XC"],
//   [50, "L"],
//   [40, "XL"],
//   [10, "X"],
//   [9, "IX"],
//   [5, "V"],
//   [4, "IV"],
//   [1, "I"],
// ];

// function convertToRoman(num) {
//   if (num === 0) {
//     return "";
//   }
//   for (var i = 0; i < romanNumber.length; i++) {
//     if (num >= romanNumber[i][0]) {
//       return romanNumber[i][1] + convertToRoman(num - romanNumber[i][0]);
//     }
//   }
// }

// console.log(convertToRoman(8));
// console.log(convertToRoman(148));
// console.log(convertToRoman(457));

//*Other Answers

function romanize(num) {
  let roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let romanicNumber = "";
  for (let i in roman) {
    while (num >= roman[i]) {
      romanicNumber += i;
      num -= roman[i];
    }
  }
  return romanicNumber;
}

console.log(romanize(8));
console.log(romanize(148));
console.log(romanize(457));

// function convertToRoman(num) {
//   const numerals = {
//     1000: "M", //*stringler ve roman valueları
//     900: "CM",
//     500: "D",
//     400: "CD",
//     100: "C",
//     90: "XC",
//     50: "L",
//     40: "XL",
//     10: "X",
//     9: "IX",
//     5: "V",
//     4: "IV",
//     1: "I",
//   };

//   let romanized = "";
//   const decimalKeys = Object.keys(numerals).reverse();
//   decimalKeys.forEach((key) => {
//     while (key <= num) {
//       romanized += numerals[key];
//       num -= key;
//     }
//   });y
//   return romanized;
// }

// console.log(convertToRoman(457));
