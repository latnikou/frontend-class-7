// BEGIN (write your solution here)
const countChars = (text, char) => {
  let result = 0;
  for (let i = 0; i <= text.length; i++) {
    let charik = text[i];
    if (charik == char || charik == char.toUpperCase()) {
      result += 1;
    }
  }
  return result;
}
// END



console.log(countChars('hello','l'))
