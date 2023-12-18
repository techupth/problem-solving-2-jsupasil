//Exercise 1: Roman to Integer

const romanToInt = function (s) {
  //Start coding here
  s = s + "  ";
  let amount = 0;
  let current = s[0] + s[1];
  console.log(current);
  let special = ["IV", "IX", "XL", "XC", "CD", "CM"];
  let amountList = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  console.log(amountList["I"]);

  for (let i = 0; i < s.length - 2; i++) {
    if (special.includes(current)) {
      amount -= amountList[s[i]];
      console.log(amount);
    } else {
      amount += amountList[s[i]];
      console.log(amount);
    }
    current = current[1] + s[i + 2];
    console.log(current);
  }
  return amount;
};

const result1 = romanToInt("III"); // 3
const result2 = romanToInt("LVIII"); // 58
const result3 = romanToInt("MCMXCIV"); //1994

console.log(result1);
console.log(result2);
console.log(result3);
