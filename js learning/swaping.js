function swap(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    let temp = array1[i];
    array1[i] = array2[i];
    array2[i] = temp;
  }
  console.log("Array 1 after swap:", array1);
  console.log("Array 2 after swap:", array2);
}
swap([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);
// swap([1, 2, 3, 9, 5],[6, 7, 8, 9, 10]);

const a = [1, 2, 3, 4, 5];

const b = ([6, 7, 8, 9, 10][(a, b)] = [b, a]);
console.log([b, a]);
