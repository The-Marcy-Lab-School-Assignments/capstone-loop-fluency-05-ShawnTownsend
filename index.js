const capstone = "capstone fellows";

const charCount = (string) => {
    const obj = {};
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (obj[char]) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
    return obj;
};
console.log(charCount(capstone));



const letterCount = (string) => {
    const count = {};
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (count[char]) {
        count[char]++;
      } else {
        count[char] = 1;
      }
    }
    return count;
}
// console.log(letterCount(capstone)); 