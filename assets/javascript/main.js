// four jewel scores, target score, current score
var red = Math.floor(Math.random() * 12 + 1);
var blue = Math.floor(Math.random() * 12 + 1);
var orange = Math.floor(Math.random() * 12 + 1);
var sky = Math.floor(Math.random() * 12 + 1);

var targetScore = Math.floor(Math.random() * (120 - 19 + 1) + 19);
var currentScore = "";
var wins = 1;
var losses = 1;

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
        $(".current-score").text("Total: " + currentScore);
        $(".jewel-score").text("Jewel Value: " + red);
        if (currentScore === targetScore) {
            $("#wins").text("Wins: " + wins++);
            reset();
        }

        if (currentScore > targetScore) {
            $("#losses").text("Losses: " + losses++);
            reset();
        }
    });

    $("#blue").click(function () {
        currentScore = parseInt(currentScore + blue);
        $(".current-score").text("Total: " + currentScore);
        $(".jewel-score").text("Jewel Value: " + blue);
        if (currentScore === targetScore) {
            $("#wins").text("Wins: " + wins++);
            reset();
        }

        if (currentScore > targetScore) {
            $("#losses").text("Losses: " + losses++);
            reset();
        }
    });

    $("#sky").click(function () {
        currentScore = parseInt(currentScore + sky);
        $(".current-score").text("Total: " + currentScore);
        $(".jewel-score").text("Jewel Value: " + sky);
        if (currentScore === targetScore) {
            $("#wins").text("Wins: " + wins++);
            reset();
        }

        if (currentScore > targetScore) {
            $("#losses").text("Losses: " + losses++);
            reset();
        }
    });

    $("#orange").click(function () {
        currentScore = parseInt(currentScore + orange);
        $(".current-score").text("Total: " + currentScore);
        $(".jewel-score").text("Jewel Value: " + orange);
        if (currentScore === targetScore) {
            $("#wins").text("Wins: " + wins++);
            reset();
        }

        if (currentScore > targetScore) {
            $("#losses").text("Losses: " + losses++);
            reset();
        }

    });

});




