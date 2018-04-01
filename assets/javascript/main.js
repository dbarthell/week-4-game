// four jewel scores, target score, current score
var red = Math.floor(Math.random() * 12 + 1);
var blue = Math.floor(Math.random() * 12 + 1);
var orange = Math.floor(Math.random() * 12 + 1);
var sky = Math.floor(Math.random() * 12 + 1);

var targetScore = Math.floor(Math.random() * (120 - 19 + 1) + 19);
var currentScore = "";
var wins = 0;
var losses = 0;
console.log(wins, losses);

$(document).ready(function () {

    function reset() {
        currentScore = "";
        red = Math.floor(Math.random() * 12 + 1);
        blue = Math.floor(Math.random() * 12 + 1);
        orange = Math.floor(Math.random() * 12 + 1);
        sky = Math.floor(Math.random() * 12 + 1);
        targetScore = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        $(".current-score", ".jewel-score").text("");
        $("#target").text("Target Score: " + targetScore);
    }

    $("#target").append(targetScore);

    // store values in jewels on click and display
    $("#red").click(function () {
        currentScore = parseInt(currentScore + red);
        $(".current-score").text("Current Score: " + currentScore);
        $(".jewel-score").text("Jewel Score: " + red);
        if (currentScore === targetScore) {
            wins++;
            reset();
        }

        if (currentScore > targetScore) {
            losses++;
            reset();
        }
    });

    $("#blue").click(function () {
        currentScore = parseInt(currentScore + blue);
        $(".current-score").text("Current Score: " + currentScore);
        $(".jewel-score").text("Jewel Score: " + blue);
        if (currentScore === targetScore) {
            wins++;
            reset();
        }

        if (currentScore > targetScore) {
            losses++;
            reset();
        }
    });

    $("#sky").click(function () {
        currentScore = parseInt(currentScore + sky);
        $(".current-score").text("Current Score: " + currentScore);
        $(".jewel-score").text("Jewel Score: " + sky);
        if (currentScore === targetScore) {
            wins++;
            reset();
        }

        if (currentScore > targetScore) {
            losses++;
            reset();
        }
    });

    $("#orange").click(function () {
        currentScore = parseInt(currentScore + orange);
        $(".current-score").text("Current Score: " + currentScore);
        $(".jewel-score").text("Jewel Score: " + orange);
        if (currentScore === targetScore) {
            wins++;
            reset();
        }

        if (currentScore > targetScore) {
            losses++;
            reset();
        }

    });

});
    // update scoreboard



    // reset game
