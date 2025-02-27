function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let e of arr) {
    sum += e;
    if (e < min) {
      min = e;
    }
    if (e > max) {
      max = e;
    }
  }

  let avg = Math.round(100 * sum / arr.length) / 100;

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let diff = 0;
  for (let el of arr) {
    diff += el * ((-1) ** (el % 2));
  }
  return diff;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  // let counter = 0;
  // let sum = 0;

  // for (let el of arr) {
  //   if(el % 2 === 0) {
  //     counter++;
  //     sum += el;
  //   }
  // }

  let evenArr = arr.filter(e => e % 2 == 0);
  let counter = evenArr.length;
  let sum = evenArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  let result = Math.round(100 * sum / counter) / 100;

  return result;
}

function makeWork(arrOfArr, func) {
  let maxResult = func(...(arrOfArr[0]));

  for (let arr of arrOfArr) {
    let currentResult = func(...arr);
    if (currentResult > maxResult) {
      maxResult = currentResult;
    }
  }

  return maxResult;
}
