//Daily Care Need question tree
$("#male").click(function() {
    chooseGender.style.display = "none";
    chooseAge.style.display = "";
    let value = $("#male").attr("value");
    sessionStorage.setItem(2, value);
});

$("#female").click(function() {
    chooseGender.style.display = "none";
    chooseAge.style.display = "";
    let value = $("#female").attr("value");
    sessionStorage.setItem(2, value);
});

$("#family").click(function() {
    chooseGender.style.display = "none";
    let value = $("#family").attr("value");
    sessionStorage.setItem(2, value);
    // display results
});

$("#age-submit").click(function() {
    chooseAge.style.display = "none";
    let value = $("#inlineFormInput").val();
    sessionStorage.setItem("age", value);
    // display results
});