// function vowels(vow) {
//   let v = 0;
//   let vowels = ["a", "e", "i", "o", "u"];
//   //   let check =vow.includes(vowels)
//   for (let i = 0; i < vow.length; i++) {
//     if (vow.includes(vowels)) {
//       vow[vowels]++;
//       console.log(vowels);
//     } else {
//       vow[vowels] = 1;
//     }
//     console.log("print", vowels);
//   }
// }
// vowels("hello world");



function vowels(vow) {
  let result = {};
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < vow.length; i++) {
    const char = vow[i];
    if (vowels.includes(char)) {
      if (result[char]) {
        result[char]++;
      } else {
        result[char] = 1;
      }
      console.log(char);
    }
  }
  console.log(result);
}
vowels("this is for logic building");
