function somar(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "erro";
  }
  return num1 + num2;
}

exports.somar = somar;
