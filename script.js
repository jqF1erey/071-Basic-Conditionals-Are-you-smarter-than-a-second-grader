

// 1. English Section:
$(".englishButton").click(function(){
    var englishInput = $(".english").val();
        if(englishInput === "Mon"){
    // display this text if the answer is correct
    $(".englishMessage").text("Correct!");
} else{
    // display this text if the answer is incorrect
    $(".englishMessage").text("Wrong! Try again."); 
}
});


// 2. Social Studies section
$(".ssButton").click(function(){
    var ssInput = $(".socialStudies").val();
    if(ssInput === "Albany"){
        $(".ssMessage").text("Wait, that's the capital!?");
} else{
    $(".ssMessage").text("Doesn't sound like the right answer...");
}
});


// 3. Math section
$(".mathButton").click(function(){
    var mathInput = parseInt($(".math").val());
    
    // below, we are using the parseInt() function to convert the input value (a string) into a number
if(mathInput === 30){
    $(".mathMessage").text("Correct.");
} else{
    $(".mathMessage").text("This wasn't an accident,you know this.");
}
});


// 4. Science section
$(".scienceButton").click(function(){
    var scienceInput = $(".science").val();
if(scienceInput === "solid"){
    $(".scienceMessage").text("Correct");
} else{
    $(".scienceMessage").text("Science better!");
}
});




