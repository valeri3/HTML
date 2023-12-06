"use strict"
//Задание 6
let Task1 = function () {
    let a = prompt("Enter starting amount");
    let count = 0;
    while (a >= 10) {
        a -= a * 0.1;
        count++;
    }
    document.write("Number of days for which there is enough water " + count + "<br>");
}

//Задание 1
let b = function () {
    alert("Task 2: Some error occured!");
}

//Задание 2
let c = function (a) {
    alert("Task 3: Some " + a + " occurred!");
}

//Задание 3
function Count1() {
    let x = 1;
    return () => x++;
}

function createHeaders(N) {
    let count = Count1();
    for (let i = 1; i <= N; i++) {
        document.write("<h2>Header" + count() + "</h2> ");
    }
}

//Задание 4
let checkPass = function (password) {
    if (password == "Step" || password == "Web" || password == "JavaScript") {
        return true;
    } 
    else {
        return false;
    }
};

//Задание 5
let signNum = function (a) {
    if (a > 0) {
        return 1;
    }
    else if (a == 0) {
        return 0;
    }
    else {
        return -1;
    }
}

//Задание 6
let days = function (x) {
    if (x === 0) {
        return "Sunday";
    }
    else if (x === 1) {
        return "Monday";
    }
    else if (x === 2) {
        return "Tuesday";
    }
    else if (x === 3) {
        return "Wednesday";
    }
    else if (x === 4) {
        return "Thursday";
    }
    else if (x === 5) {
        return "Friday";
    }
    else if (x === 6) {
        return "Saturday";
    }
    else {
        return "Wrong input!";
    }
}