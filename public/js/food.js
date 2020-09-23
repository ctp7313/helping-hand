const firstQuestion = document.getElementById("first-question");
const foodService = document.getElementById("food-service");
const chooseGender = document.getElementById("gender");
const chooseAge = document.getElementById("age");
// const conditionals;

// Food Need question tree
$("#food").click(function() {
    firstQuestion.style.display = "none";
    foodService.style.display = "";
});

$("#food-bank").click(function() {
    foodService.style.display = "none";
    chooseGender.style.display = "";
    let foodBankTrue = $("#food-bank").value;
    console.log(foodBankTrue);
});

$("#served-meal").click(function() {
    foodService.style.display = "none";
    chooseGender.style.display = "";
});

$("#male").click(function() {
    chooseGender.style.display = "none";
    chooseAge.style.display = "";
});

$("#female").click(function() {
    chooseGender.style.display = "none";
    chooseAge.style.display = "";
});

$("#prefer-not").click(function() {
    chooseGender.style.display = "none";
    chooseAge.style.display = "";
});

$("#family").click(function() {
    chooseGender.style.display = "none";
    // display results
});

$("#age-submit").click(function() {
    chooseAge.style.display = "none";
    // display results
});