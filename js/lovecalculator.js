//prompt("what is your name");
//prompt("What is thair name");

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