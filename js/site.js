
const APIurl = "https://opentdb.com/api.php?amount=10";
let currentQuestion;
let score = 0;
let bgColor;


function getQuestions () {
    fetch(APIurl).then(response => response.json()).then(data => {
        let currentQuestion = data.results[0];
        console.log(currentQuestion);
        questionDisplay(currentQuestion);
        answerDisplay(currentQuestion);
        checkResults(currentAnswer);
    })
}
getQuestions();




function questionDisplay(currentQuestion){

    const questionContainer = document.getElementById("question_container")
    questionContainer.innerHtml = '';

    const questionTag = document.createElement("p")
    questionTag.textContent = currentQuestion.question; 
    questionContainer.appendChild(questionTag);
}



function answerDisplay(currentQuestion){
    const buttonContainer = document.getElementById("button_container")
    buttonContainer.innerHtml = '';
    
    // Correct Button answer
    const buttonTag = document.createElement("button")
    buttonTag.textContent = currentQuestion.correct_answer; 
    buttonTag.setAttribute("id", "correctAns");
    buttonTag.addEventListener("click", () => checkResults(currentQuestion.correct_answer))
    buttonContainer.appendChild(buttonTag)




    // WRONG BUTTONS
currentQuestion.incorrect_answers.forEach((wrongAnswer,index) => {
    const incorrectAnswerButton = document.createElement("button")
    incorrectAnswerButton.textContent = wrongAnswer;
    incorrectAnswerButton.setAttribute("id", "wrongAnswer" + index)
    incorrectAnswerButton.addEventListener("click", () => checkResults(wrongAnswer))
    buttonContainer.appendChild(incorrectAnswerButton)

})
    //Check Results

    function checkResults(currentAnswer){

        if(currentAnswer === currentQuestion.correct_answer){
            
            bgColor='limegreen';
            alert("+1")
            score++;
            scoreUpdate();
            const questionTag = document.getElementById("question_tag")
            // questionTag.innerHtml = '';
            getQuestions();

        }
        else{
            bgColor='red'
            alert("FAILED");
           
            score--;
            scoreUpdate();
    }
document.body.style.backgroundColor = bgColor;


    }
}


function scoreUpdate () {
    const scoreTag = document.getElementById("score_count")
    scoreTag.innerHtml = '';
    scoreTag.textContent = "Score: " + score;
}

document.getElementById("giveQuestion").addEventListener("click", () => getQuestions());






