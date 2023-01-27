let arr = [1, 3, 5, 2, 8, 0, 0, "qwerty", "jasdhg", NaN, NaN, 0, 1, 22, 32];

let oddNums = 0;
let evenNums = 0;
let zeroNums = 0;
let otherSign = 0;

for (let i = 0; i < arr.length; ++i) {
  if (typeof arr[i] == "number") {
    if (isNaN(arr[i])) {
      otherSign += 1;
    } else {
      if (arr[i] === 0) {
        zeroNums += 1;
      } else {
        if (arr[i] % 2) {
          oddNums += 1;
        } else {
          evenNums += 1;
        }
      }
    }
  } else {
    otherSign += 1;
  }
}

console.log(`В массиве ${oddNums} нечетных элементов`);
console.log(`В массиве ${evenNums} четных элементов`);
console.log(`В массиве ${zeroNums} нулевых значений`);
console.log(`В массиве ${otherSign} прочих значений`);
