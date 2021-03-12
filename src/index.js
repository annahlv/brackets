module.exports = function check(str, bracketsConfig) {
  console.log(str);
  let array = [];
  let brackets = bracketsConfig.reduce((acc, val) => acc.concat(val), []);
  let opening = brackets.filter((_, i) => i % 2 == 0);
  let closing = brackets.filter((_, i) => i % 2 != 0);
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    if (opening.includes(str[i])) {
      array.push(str[i]); 
    } 
    if (closing.includes(str[i])) {
      let last = array.pop();
      //console.log(str[i-1], last);
      if (str[i - 1] !== last) array.pop();
    }
  }
  if (array.length !== 0) return false;
  return true;
}
