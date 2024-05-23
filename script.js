const fs = require('fs');
function rimvdec(rim) {
//ключи с римскими цифрами
    const rimNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
    };
let res = 0;
//цикл для перевода из римской в десятичную
for (let i = 0; i < rim.length; i++) {
    //  Если значение текущей цифры меньше значения следующей цифры, то из переменной res вычитается значение текущей цифры
    if (rimNumerals[rim[i]] < rimNumerals[rim[i + 1]]) {
        res += rimNumerals[rim[i + 1]] - rimNumerals[rim[i]]; 
        i++;
    } else {
        res += rimNumerals[rim[i]];
    }
}
fs.writeFileSync('Результат.txt', String(res));
console.log(res);
}
rimvdec("M");