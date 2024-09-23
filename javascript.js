// Problem 1
const findSubArrays = (arr, target) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let multiply = 1;
    let subArr = [];
    for (let j = i; j < arr.length; j++) {
      multiply *= arr[j];
      if (multiply >= target) {
        break;
      } else {
        subArr.push(arr[j]);
        result.push([...subArr]);
      }
    }
  }
  return result;
};

let arr1 = [8, 2, 6, 5];
let target = 50;
console.log(findSubArrays(arr1, target));

// Problem 2
const convertToBinary = (num) => {
  let convertedNum = "";
  while (num > 0) {
    convertedNum = (num % 2) + convertedNum;
    num = Math.floor(num / 2);
  }
  return convertedNum || 0;
};

console.log(convertToBinary(18));

// Problem 3
const findMax = (arr) => {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (newArr.includes(arr[i])) {
      newArr.splice(newArr.indexOf(arr[i]), 1);
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr.length > 0 ? Math.max(...newArr) : -1;
};

let arr3 = [1, 2, 3, 2, 1, 4, 4];
console.log(findMax(arr3));
