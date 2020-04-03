var correct = 0;
var incorrect = 0;
var questionIndex = 0;

var questions = [
    {title:"1. What is the HTML tag under which one can write the JavaScript code?", choices:["javascript", "scripted", "script", "js"] ,  
    answer:"script"},
    {title:"2. Which of the following is the correct syntax to display “Time to walk the dog!” in an alert box using JavaScript??", choices:["alertBox", "message", "msgbox", "alert"] ,  
    answer:"alert"},
    {title:"3. What is the correct syntax for referring to an external script called “main.js”?", choices:["script src =", "script href =", "script ref =", "script name ="] ,  
    answer:"script src ="},
    {title:"4. Which of the following is not a reserved word in JavaScript?", choices:["interface", "throws", "program", "short"] ,  
    answer:"program"}, ]
    
    var counter = 120;
    function startCounter () {
   
    setInterval(function(){ 
        counter --
        $("#counter").empty()
        $("#counter").append(counter)
    }, 1000);
}
    function displayQuestion() {
    $('#title').empty()
    $('#choices').empty()

    var title = $("<p>").text(questions[questionIndex].title)

    $("#title").prepend(title)

    for (let i = 0; i < questions[questionIndex].choices.length; i++) {
        console.log(questions[questionIndex].choices[i]) 
        var choice = $("<input>").attr("type", "radio").attr('value',questions[questionIndex].choices[i]).attr('name', 'choice').addClass("choice")
        var choiceText = $('<p>').text(questions[questionIndex].choices[i])
        $("#choices").prepend(choice, choiceText)
    }
}

$("#button").on("click",function (){
    console.log("You chose", $("input[name=choice]:checked","#quiz").val());
     if (questions[questionIndex].answer === $("input[name=choice]:checked","#quiz").val()){
        correct ++
        console.log("CORRECT", correct)
    } else {
        console.log("INCORRECT", incorrect)
        incorrect ++
        counter = counter - 10
    }
    
    if (questions.length === questionIndex + 1){ 
        console.log("time stop")
        $('#quiz').empty()
        var score = $("<p>").text(" Correct " + correct + "      Incorrect " + incorrect)
        $("#quiz").append(score)
    } else {
        questionIndex ++
        displayQuestion ()
    }

})
// says all of the questions are incorrect 
$("#startBtn").on("click",function (){
   $("#start").remove()
   displayQuestion()
   startCounter()
   $("#button").removeClass("hide")
})
