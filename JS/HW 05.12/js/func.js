"use strict"
// Задание 1
// Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом.
// 1. Функция для вывода на экран информации об автомобиле.
// 2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
class Car {
    #brand;
    #model;
    #year;
    #averageSpeed;

    constructor(brand, model, year, averageSpeed) {
        this.#brand = brand;
        this.#model = model;
        this.#year = year;
        this.#averageSpeed = averageSpeed;
    }

    get brand() {return this.#brand;}
    set brand(b) {this.#brand = b;}
    get model() {return this.#model;}
    set model(m) {this.#model = m;}
    get year() {return this.#year;}
    set year(y) {this.#year = y;}
    get averageSpeed() {return this.#averageSpeed;}
    set averageSpeed(s) {this.#averageSpeed = s;}

    displayInfo() {
        return `Бренд: ${this.#brand}, Модель: ${this.#model}, Год выпуска: ${this.#year}, Средняя скорость: ${this.#averageSpeed} км/ч`;
    }

    calculateTravelTime(distance) {
        const timeWithoutBreaks = distance / this.#averageSpeed;
        const breaks = Math.floor(timeWithoutBreaks / 4);
        const totalTime = timeWithoutBreaks + breaks;
        return totalTime;
    }
}


// Задание 2
// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом.
// 1. Функция сложения 2-х объектов-дробей.
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей.
// 5. Функция сокращения объекта-дроби
class Fraction {
    #a;
    #b;

    constructor(a, b) {
        this.#a = a;
        this.#b = b;
    }

    get a() {return this.#a;}
    set a(a1) {this.#a = a1;}
    get b() {return this.#b;}
    set b(b1) {this.#b = b1;}

    add(c) {return new Fraction(this.#a * c.#b + c.#a * this.#b, this.#b * c.#b);}
    subtract(c) {return new Fraction(this.#a * c.#b - c.#a * this.#b, this.#b * c.#b);}
    multiply(c) {return new Fraction(this.#a * c.#a, this.#b * c.#b);}
    divide(c) {return new Fraction(this.#a * c.#b, this.#b * c.#a);}

    reduce() {
        function gcd(a, b) {
            return b ? gcd(b, a % b) : a;
        }

        let nod = gcd(this.#a, this.#b);
        this.#a /= nod;
        this.#b /= nod;

        if (this.#b < 0) {
            this.#a = -this.#a;
            this.#b = -this.#b;
        }

        return this;
    }
}

// Задание 3
// Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом.
// 1. Функция вывода времени на экран.
// 2. Функция изменения времени на переданное количество секунд.
// 3. Функция изменения времени на переданное количество минут.
// 4. Функция изменения времени на переданное количество часов.
// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например: если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».
class Time {
    #h;
    #min;
    #sec;

    constructor(h, min, sec) {
        this.#h = h;
        this.#min = min;
        this.#sec = sec;
    }

    get h() {return this.#h;}
    set h(h1) {this.#h = h1;}
    get min() {return this.#min;}
    set min(m1) {this.#min = m1;}
    get sec() {return this.#sec;}
    set sec(s1) {this.#sec = s1;}

    displayTime() {
        return `${this.#h.toString().padStart(2, '0')}:${this.#min.toString().padStart(2, '0')}:${this.#sec.toString().padStart(2, '0')}`;
    }

    addSec(addSec) {
        this.#sec += addSec;
        this.#min += Math.floor(this.#sec / 60);
        this.#sec %= 60;
        this.#h += Math.floor(this.#min / 60);
        this.#min %= 60;
        this.#h %= 24;
    }

    addMin(addMin) {
        this.#min += addMin;
        this.#h += Math.floor(this.#min / 60);
        this.#min %= 60;
        this.#h %= 24;
    }

    addHr(addHr) {
        this.#h += addHr;
        this.#h %= 24;
    }
}