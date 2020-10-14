// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple 

// const q = 30;
// const c = 9;
// const d = 'easy';
// const t = 'multiple';

// function numberOfQuestions () {
//     const numberOfQuestions = document.getElementById('n-questions').value
//     return numberOfQuestions
// }


// function category () {
//     const category = document.getElementById('category-selected').value
//     return category
// }

// function difficulty () {
//     const difficulty = document.getElementById('difficulty-selected').value
//     return difficulty
// }

// function type () {
//     const type = document.getElementById('type-selected').value
//     return type
// }
let container = document.getElementById('container')
let questions = [];
function getFilters () {
    const q = document.getElementById('n-questions').value; 
    const c = document.getElementById('category-selected').value;
    const d = document.getElementById('difficulty-selected').value;
    const t = document.getElementById('type-selected').value;

    fetch(`https://opentdb.com/api.php?amount=${q}&category=${c}&difficulty=${d}&type=${t}`)
        .then((response) => response.json())
        .then((loadedQuestions) => {
            questions = loadedQuestions.results.map((everyLoadedQuestion) => {
                const formattedQuestion = {question : everyLoadedQuestion.question}
                // console.log(formattedQuestion);
                const answerChoices = [...everyLoadedQuestion.incorrect_answers]
                // console.log(answerChoices);
                formattedQuestion.answer = Math.floor(Math.random()) + 1;
                answerChoices.splice(
                    formattedQuestion.answer - 1,
                    0,
                    everyLoadedQuestion.correct_answer
                );
                answerChoices.forEach((choice, index) => {
                    formattedQuestion['choice' + (index + 1)] = choice;
                });
                console.log(formattedQuestion)
                if(document.getElementById('type-selected').value === 'multiple'){
                    container.innerHTML +=      `
                                             <h4>
                                                ${formattedQuestion.question}
                                            </h4>
                                            <br>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="option" id="choice1" value="choice1" checked>
                                                <label class="form-check-label" for="choice1">
                                                ${formattedQuestion.choice1}
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="option" id="choice2" value="choice2" checked>
                                                <label class="form-check-label" for="choice2">
                                                ${formattedQuestion.choice2}
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="option" id="choice3" value="choice3" checked>
                                                <label class="form-check-label" for="choice3">
                                                ${formattedQuestion.choice3}
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="option" id="choice4" value="choice4" checked>
                                                <label class="form-check-label" for="choice4">
                                                ${formattedQuestion.choice4}
                                                </label>
                                            </div>
                                            `
                                            // <p>
                                            //     ${formattedQuestion.choice2}
                                            // </p>
                                            // <p>
                                            //     ${formattedQuestion.choice3}
                                            // </p>
                                            // <p>
                                            //     ${formattedQuestion.choice4}
                                            // </p>
                
                } else { 
                    container.innerHTML +=      `<p>
                                                ${formattedQuestion.question}
                                            </p>
                                            <br>
                                            <p>
                                                ${formattedQuestion.choice1}
                                            </p>
                                            <p>
                                                ${formattedQuestion.choice2}
                                            </p>
                                            `

                }
                
            })

        });

    
};

function printCards(questions) {
    console.log(questions);
}

// function createCard () {
//     const card =    `<div>
//                         <h2>${data.question}</h2>
//                     </div>
    
//     `
//     return card
// }






    




