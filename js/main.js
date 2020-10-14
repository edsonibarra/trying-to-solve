// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple 

// const q = 30;
// const c = 9;
// const d = 'easy';
// const t = 'multiple';

function numberOfQuestions () {
    const numberOfQuestions = document.getElementById('n-questions').value
    return numberOfQuestions
}


function category () {
    const category = document.getElementById('category-selected').value
    return category
}

function difficulty () {
    const difficulty = document.getElementById('difficulty-selected').value
    return difficulty
}

function type () {
    const type = document.getElementById('type-selected').value
    return type
}


fetch(`https://opentdb.com/api.php?amount=${numberOfQuestions()}&category=${category()}&difficulty=${difficulty()}&type=${type()}`)
    .then((response) => response.json())
    .then((data) => printCards(data))



    
function printCards(questions) {
    console.log(questions);
}



