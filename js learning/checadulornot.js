function adultOrNot(a) {
  if (a >= 18 && a < 50) {
    if (a >= 25) {
      console.log(`${a} he is adult & ready for marriage`);
    } else {
      console.log(`${a} he is an adult`);
    }
  } else if (a > 50) {
    console.log(`${a} he is an senior citizen`);
  } else {
    console.log(`${a} he is not an adult`);
  }
}
adultOrNot(10);
adultOrNot(18);
adultOrNot(25);
adultOrNot(26);
adultOrNot(40);
adultOrNot(28);
adultOrNot(30);
adultOrNot(51)
 