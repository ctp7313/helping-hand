const firstQuestion = document.getElementById("first-question");
const shelterService = document.getElementById("shelter-service");
const chooseGender = document.getElementById("gender");
const chooseAge = document.getElementById("age");

// Shelter Need question tree
$("#shelter").click(function() {
    firstQuestion.style.display = "none";
    shelterService.style.display = "";
});

$("#immediate").click(function() {
    shelterService.style.display = "none";
    chooseGender.style.display = "";
});

$("#longer-term").click(function() {
    shelterService.style.display = "none";
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