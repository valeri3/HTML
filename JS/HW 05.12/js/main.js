let myCar = new Car("Toyota", "Camry", 2020, 80);
console.log("Задание 1");
console.log(myCar.displayInfo());
console.log(`Необходимое время для преодоления 600 км: ${myCar.calculateTravelTime(600)} ч.`);

let frac1 = new Fraction(1, 2);
let frac2 = new Fraction(3, 4);
console.log("Задание 2");
let sum = frac1.add(frac2);
console.log(`Сумма: ${sum.a}/${sum.b}`);

let diff = frac1.subtract(frac2);
console.log(`Разность: ${diff.a}/${diff.b}`);

let mult = frac1.multiply(frac2);
console.log(`Произведение: ${mult.a}/${mult.b}`);

let div = frac1.divide(frac2);
console.log(`Частное: ${div.a}/${div.b}`);

console.log("Задание 3");
let currentTime = new Time(20, 30, 45);
console.log("Текущее время:", currentTime.displayTime());

currentTime.addSec(40);
console.log("Добавляем 40 секунд:", currentTime.displayTime());

currentTime.addMin(23);
console.log("Добавляем 23 минуты:", currentTime.displayTime());

currentTime.addHr(9);
console.log("Добавляем 9 часов:", currentTime.displayTime());