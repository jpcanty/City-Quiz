$(".submit-button").click(function() {
    //Store user input in a variable
    let mAnswer = $(".m-answer").val();
    let seasonAnswer = $(".season-answer").val();
    let mSection = "";
    
    if (mAnswer > 10) {
        mSection = "You have plenty M's";
    } else if (mAnswer < 10) {
        mSection = "Let's get more M's";
    } else {
        mSection = "You dont have plenty M's";
    }

    let message = "<p> " + mSection + " and your favorite season is " + seasonAnswer + ".</p>";

    let counterValueText = $(".counter").text();
    let counterValue = parseInt(counterValueText);
    let incrementedCounterValue = counterValue + 1;
    $(".counter").text(incrementedCounterValue);

    //Displays the output using .append()
    $(".results").append(message);
});