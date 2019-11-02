
$(document).ready(function() {
    var i = 0;
    var check = 0;
    var intervalId;
    var seconds;
    var a;
    var startButton = $("#startButton");
    var questionArea = $("#Questions");
    var promptArea = $("#prompt")
    var answer = $("#answer")
    var grats = $("grats")
    var score = 0;
    var buttonArea = $("#buttons")
    var playAgain = $("<button>" + "Play Again" + "</button>")
    grats.hide();
    questionArea.hide();
    
    var questionObj = [
    {
        question: "What house at Hogwarts does Harry belong to?",
        answers: ["Hufflepuff", "Gryffindor", "Ravenclaw", "Slytherin"],
        answer: 1
    },
    {
        question: "What position does Harry play on his Quidditch team?",
        answers: ["Keeper", "Bludger", "Seeker", "Chaser"],
        answer: 2
    },
    {
        question: "Which of the Weasleys went to Romania to study dragons?",
        answers: ["Charlie", "George", "Fred", "Percy"],
        answer: 0
    },
    {
        question: "In what month is Harry Potter's birthday?",
        answers: ["November", "July", "June", "December"],
        answer: 1
    },
    {
        question: "The crowing of which animal is fatal to a Basilisk?",
        answers: ["Toad", "Chicken", "Spider", "Rooster"],
        answer: 3
    },
    {
        question: "Which language, like Voldemort, is Harry able to speak?",
        answers: ["Mermish", "Parseltongue", "Elfish", "German"],
        answer: 2
    },
    {
        question: "What did James Potter's school friends nickname him?",
        answers: ["Padfoot", "Prongs", "Mooney", "Wormtail"],
        answer: 1
    },
    {
        question: "Which device enabled Hermione to attend three classes at once in her third year?",
        answers: ["Rememberall", "Time-turner", "Philosopher's Stone", "Sneakoscope"],
        answer: 3
    }]
    
    var questionCount = 8;
    
    startButton.on("click", function(){
        startButton.hide();
        questionArea.show();
        intervalId = setInterval(decrement, 1000);
        
        game();
    })
    
    function game(){
        seconds = 25;
        check = 0;
        $("#gratsPrompt").text("")
        //console.log(questionObj[i].question)
        promptArea.text(questionObj[i].question)
        for(var j = 0; j < questionObj[i].answers.length; j++){
            a = $("<button>" + questionObj[i].answers[j] + "</button>")
            // a.attr("type", "button")
            a.attr("id", "answer")
            a.attr("name", "answer")
            a.attr("value", j)
            buttonArea.append(a)
            
           // console.log(a.val())
            a.on("click", function(){
                questionCount--
                if($(this).val() == questionObj[i].answer){
                    //alert("Hey")
                    score++;
                    i++;
                    game();
                    gratsScreen();
               
                }
                else if (questionCount == 0){
                    end()
                }
                else{
                    //alert("no")
                    i++;
                    loseScreen();
                    //game();
                }
            })
        }
    }
    
    function decrement() {
        seconds--;
        $("#Timer").html(seconds);
        if(check == 1){
            if (seconds === 0) {
                game()
              }
        }
        else if (check == 0){
            if (seconds === 0) {
                outOfTimeScreen();
              }
        }
      }
    
    function gratsScreen(){
        check = 1;
        seconds = 7;
        promptArea.text("CONGRATS")
        buttonArea.empty();
        $("#gratsPrompt").text("You got the question right!")
        // intervalId = setInterval(decrement, 1000);
    }
    
    function loseScreen(){
        check = 1;
        seconds = 7;
        buttonArea.empty();
        promptArea.text("You got it wrong!")
    }
    
    function outOfTimeScreen(){
        check = 1;
        seconds = 7;
        questionCount--
        i++;
        console.log(questionCount)
        buttonArea.empty();
        promptArea.text("You ran out of time!")
        if(questionCount == 0){
            end();
        }
    }
    
    function end(){
        clearInterval(intervalId);
        $("#timeArea").hide();
        buttonArea.empty();
        buttonArea.append(playAgain);
        promptArea.text("You got " + score + " right! Good job!");
        playAgain.on("click", function(){
            check = 0;
            $("#timeArea").show();
            questionCount = 8;
            i = 0;
            score = 0;
            intervalId = setInterval(decrement, 1000);
            game();
        })
    
    }
    console.log(check)
    })
    
    