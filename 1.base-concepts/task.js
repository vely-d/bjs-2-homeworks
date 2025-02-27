"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  
  let d = b*b - 4*a*c;
  if (d < 0) {
    return arr
  }

  let x1 = (-b + Math.sqrt(d)) / (2 * a);
  arr.push(x1);
  if (d === 0) {
    return arr
  }

  let x2 = (-b - Math.sqrt(d)) / (2 * a);
  arr.push(x2);
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 1200;
  let body = amount - contribution;
  let monthlyPayment = body * (percent + (percent / (((1 + percent))**countMonths - 1)));
  let totalSum = monthlyPayment * countMonths;
  totalSum = Math.round(totalSum * 100) / 100;
  return totalSum;
}