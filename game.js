

var submittedAnswers = 
    {
        1: "", 
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        10: ""
    }

//todo: add in correct answers to the Qs
var correctAnswers = {
    1: true, 
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true
}

function showQuestion1 (questionContainer, answerContainer) {
    
    questionContainer.innerHTML = "What color is the sky?"

    var answers = ["red", "blue", "green", "black"]
    var answerHTML = []
    answerHTML.push('<button class="answer" onclick="saveAnswer(1, 1)" id="ans1">' + answers[0] + '</button>');
    answerHTML.push('<button class="answer" onclick="saveAnswer(1, 2)" id="ans2">' + answers[1] + '</button>');
    answerHTML.push('<button class="answer" onclick="saveAnswer(1, 3)" id="ans3">' + answers[2] + '</button>');
    answerHTML.push('<button class="answer" onclick="saveAnswer(1, 4)" id="ans4">' + answers[3] + '</button>');
    answerContainer.innerHTML = answerHTML.join('');
    console.log(answerContainer.innerHTML);
}

function saveAnswer(questionNumber, choice) {
    submittedAnswers[questionNumber] = choice;
    console.log(submittedAnswers);

}

function checkAnswers() {
    score = 0;
    for (var i = 0; i<submittedAnswers.length; i++) {
        if (submittedAnswers[i] == correctAnswers[i]) {
            score ++;
        }
    }
    console.log(score)
}



