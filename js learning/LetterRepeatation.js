function repeated(a) {
  let result = {};
  for (let i = 0; i < a.length; i++) {
    let char = a[i];
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  console.log(result);
}
repeated("malayalam");

function myFunction(a) {
  let result = {};
  for (let i = 0; i < a.length; i++) {
    let hey = a[i];
    console.log(hey);
    if (result[hey]) {
      result[hey]++;
    } else {
      result[hey] = 1;
    }
  }
  console.log(result);
}
myFunction("ashnad");
