
function dogAgeInHumanYears() {
    var dogAge = prompt("how old is your dog?");

    var humanAge = ((dogAge - 2) * 4) + 21;
    alert("your dog is " + humanAge + " years old in human years");
}

function helloAlert() {
    var name = prompt("what is your name:");

    var firstChar = name.slice(0, 1);
    var upperCaseFirstChar = firstChar.toUpperCase();
    var restOfName = name.slice(1, name.lenth);
    restOfName = restOfName.toLowerCase();
    var capitalizedName = upperCaseFirstChar + restOfName;

    alert("hello " + capitalizedName);
}

function lifeInWeeks(age) {
    var restLife = 90 - age;
    var days = restLife * 365;
    var weeks = restLife * 52;
    var months = restLife * 12;

    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
}

// string = tekst ' ; number ; bigint => 2*53 ; boolean = true false ; null ; undefined ; symbol

function getMilk(money, cost) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    console.log("buy " + calcBattles(money, cost) + " bottles of milk")

    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return calcChange(money, cost);
}

function calcBattles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}

//console.log("Hello master, hire is your " + getMilk(11, 1.5) + " change.")


function getBeer(euro) {
    var beerCost = Math.floor(euro / 0.99);
    console.log("you can have " + beerCost + " for it");
}

function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);

    if (bmi < 18.5) {
        return ("Your BMI is " + Math.round(bmi) + ", so you are underweight.");
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
        return ("Your BMI is " + Math.round(bmi) + ", so you have a normal weight.");
    }
    if (bmi > 24.9) {
        return ("Your BMI is " + Math.round(bmi) + ", so you are overweight.");
    }
}

function whosIsPaying(names) {

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!"
}

function loveCalculator() {
    prompt("what is your name");
    prompt("What is thair name");

    var loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1;

    if (loveScore > 70) {
        alert("Your love score is " + loveScore + "% You love each other like Kanye love Kanye.");
    }
    if (loveScore > 30 && loveScore <= 70) {
        alert("Your love score is " + loveScore + "%");
    }
    if (loveScore <= 30) {
        alert("Your love score is " + loveScore + "% You go together like oil and water.");
    }
}

function ifLeap(year) {

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year.";
            } else {
                return "Not leap year.";
            }
        } else {
            return "Leap year.";
        }
    } else {
        return "Not leap year.";
    }
}

function guestCheck() {

    var guestList = ["Kiss", "Hell", "Aaliyah", "Lara", "Sephira", "Arianna"];

    var guestName = prompt("What is your name?");

    if (guestList.includes(guestName)) {
        alert("Welcome!");
    } else {
        alert("Sorry, maybi next time.");
    }
}

var output = [];
var count = 1;

function fizzBizz() {

    while (count <= 100) {

        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBizz");
        } else if (count % 3 === 0) {
            output.push("Fizz");
        } else if (count % 5 === 0) {
            output.push("Bizz");
        } else {
            output.push(count);
        }

        count++; //count = count +1
    }
    console.log(output);
}

function fibonacciGenerator(n) {

    var output = []

    if (n === 1) {
        output = [0];

    } else if (n === 1) {
        output = [0, 1];

    } else {
        output = [0, 1];

        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;
}

document.querySelector("h1").innerHTML = "Good bay!";
document.querySelector("p").innerHTML = "testing";
document.querySelector(".kiss").innerHTML = "hell";

function jsengin(code) {
    return code.split(/\s+/);
}

jsengin ('var a = 5');