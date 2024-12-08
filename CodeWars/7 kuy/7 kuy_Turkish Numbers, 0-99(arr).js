const getTurkishNumber = (num) => {
  let units = ["sıfır", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"];
  let tens = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"];

  const unitPart = num % 10;
  const tensPart = Math.floor(num / 10);

  if (num < 10) {
    return units[num];
  }
  if (unitPart === 0) {
    return tens[tensPart];
  }
  return `${tens[tensPart]} ${units[unitPart]}`;
};

console.log(getTurkishNumber(0));
console.log(getTurkishNumber(16));
console.log(getTurkishNumber(1));
console.log(getTurkishNumber(10));
console.log(getTurkishNumber(50));
console.log(getTurkishNumber(44));
