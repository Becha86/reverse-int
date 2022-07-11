module.exports = function reverse (n) {
  let num = Math.abs(n);
  let numToString = num.toString();
  let arr = numToString.split('');
  return Number(arr.reverse().join(''));
}
