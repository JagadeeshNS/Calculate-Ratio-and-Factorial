const factorialOfNumber = require("../factorial/index");
const ratioOFTwoNumbers = require("../ratio/index");

const rationAndFactorial = (num1, num2, num3) => {
  const ratio = ratioOfTwoNumbers(num1, num2);
  const factorial = factorialOfNumber(num3);

  return { ratio, factorial };
};
module.exports = rationAndFactorial;
