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


function jsengin(code) {
    return code.split(/\s+/);
}

jsengin ('var a = 5');