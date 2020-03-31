

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
displayQuestion()

$("#button").on("click",function (){
    console.log("You chose", $("input[name=choice]:checked","#quiz").val());
    if (questions[0].answer === $("input[name=choice]:checked","#quiz").val()){
        console.log("CORRECT")
        correct ++
        questionIndex ++
        displayQuestion()
    } 
    
    else {
        console.log("INCORRECT")
        incorrect ++
        questionIndex ++
        displayQuestion()
    }
    
})



