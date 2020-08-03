
function funQuiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
funQuiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
    }
    funQuiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}
funQuiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
    }

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
    Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
    }

function questionAndChoice() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        questionAndChoice();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions in array
var questions = [
    new Question("1. H2O is the chemical formula for what?", ["Water", "Carbon dioxide","zinc", "Gas"], "Water"),

    new Question("2. How many legs does a spider have?", ["4", "6", "8", "12"], "8"),

    new Question("3. Which is the country with the biggest population in Europe?", ["Germany", "UK","Russia", "France "], "Russia"),

    new Question("4. Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),

    new Question("5. What item, useful in the rain, provided the title of a hit single of Rihanna?", ["Pan", "Umbrella", "Bow", "All"], "Umbrella")
];

var quiz = new funQuiz(questions);

questionAndChoice();