
$(document).ready(function() {

var intervalId;
var a = 0;
var answered = 0;
var x = $("#Button");
var y = $("#Questions");
y.hide();
var z = $("#Submit");
z.hide();
var seconds = 50;
var score = 0;
var questions = [
    {
    prompt: "What is this?",
    answers: ["dog", "frog", "chicken"],
    answer: 0
    },
    {
    prompt: "What is this?",
    answers: ["dog", "frog", "chicken"],
    answer: 1
    },
    {
    prompt: "What is this?",
    answers: ["dog", "frog", "chicken"],
    answer: 0
    }
];

function start(){
    x.remove();
    y.show();
    z.show();
    game();
}

x.on("click", function() {
    start();
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
});

function decrement() {
    seconds--;
    $("#Timer").html(seconds);
    if (seconds === 0) {

      hey();
    }
  }

function game(){
    for(var i = 0; i < questions.length; i++){
        answered = questions.answer
        y.append($("<h1>" + questions[i].prompt + "</h1>"))
        for(var j = 0; j < questions[i].answers.length; j++){
            a = $("<input>" + questions[i].answers[j] + "</input>")
            a.attr("id", "answer")
            a.attr("type", "radio")
            a.attr("value", j)
            y.append($(a))

        }

    } 

    $('#answer').on("click", submit())  

}



function submit(){
    console.log(answered)
    console.log($(this).val())
    if($(this).val() == questions[answered].answer){
        alert("yes")
    }
    else{
        alert("no")
    }
}

function hey(){
    alert("hey" + score);
    clearInterval(intervalId);
}

})