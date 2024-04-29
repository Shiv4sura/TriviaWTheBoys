

const APIurl = "https://opentdb.com/api.php?amount=10";



function getQuestions () {
    fetch(APIurl).then(response => response.json()).then(data => {
        console.log(data.results)
    })
}

// getQuestions();

const answer_1 = document.getElementById("answer_1");
const answer_2 = document.getElementById("answer_2");
const answer_3 = document.getElementById("answer_3");
const answer_4 = document.getElementById("answer_4");




