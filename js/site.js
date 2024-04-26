




const BASE_API_URL = 'https://opentdb.com/api.php?amount=10&encode=url3986';

const questions = [];
const score = 0;



function getQuestions() {
    fetch(BASE_API_URL).then(response => response.json()).then(data => {
        questions = data.results;
        console.log(questions)

    })
}



getQuestions()





