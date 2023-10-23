// function reverse(a){
//     let reversed=a.split("").reverse("").join("");
//     console.log(reversed)
// }
// reverse("india is my country")
function reverseWords(a) {
    let words = a.split(" ");
    let reversedWords = words.map(word => word.split("").reverse().join(""));
    let reverseda = reversedWords.join(" ");
    console.log(reverseda);
  }
  
  reverseWords("india is my country");
  