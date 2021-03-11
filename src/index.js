module.exports = function check(str, bracketsConfig) {
  let array = [];
  let brackets = bracketsConfig.reduce((acc, val) => acc.concat(val), []);
  let opening = brackets.filter((_, i) => i % 2 == 0);
  let closing = brackets.filter((_, i) => i % 2 != 0);
  for (let i = 0; i < str.length; i++) {
    if (opening.includes(str[i])) {
      array.push(str[i]); 
    } else if (closing.includes(str[i])) {
      if (array.pop() !== str[i-1]) return false;
    }
  }
  //if (array.length !== 0) return false;
  return true;
}
