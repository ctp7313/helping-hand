const firstQuestion = document.getElementById("first-question");
const healthService = document.getElementById("health-service");
const chooseGender = document.getElementById("gender");
const chooseAge = document.getElementById("age");                         

// Health Need question tree
$("#health").click(function() {
    firstQuestion.style.display = "none";
    healthService.style.display = "";
});

$("#urgent").click(function() {
    healthService.style.display = "";
    // display results
})

$("#dental").click(function() {
    healthService.style.display = "none";
    chooseAge.style.display = "";
})

$("#mental").click(function() {
    healthService.style.display = "none";
    chooseAge.style.display = "";
})

$("#age-submit").click(function() {
    chooseAge.style.display = "none";
    // display results
});
