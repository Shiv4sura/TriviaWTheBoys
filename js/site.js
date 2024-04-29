
const APIurl = "https://opentdb.com/api.php?amount=10";
let currentQuestion;



function getQuestions () {
    fetch(APIurl).then(response => response.json()).then(data => {
        const currentQuestion = data;
        console.log(currentQuestion);
        questionDisplay(currentQuestion);
    })
}
getQuestions();







function questionDisplay(currentQuestion){

    const questionContainer = document.getElementById("question_container")
    questionContainer.innerHtml = '';

    const questionTag = document.createElement("p")
    questionTag.textContent = currentQuestion.question; 
    questionContainer.appendChild(questionTag)
}
document.getElementById("giveQuestion").addEventListener("click", () => getQuestions());


document.getElementById("answer_1");
document.getElementById("answer_2");
document.getElementById("answer_3");
document.getElementById("answer_4");




