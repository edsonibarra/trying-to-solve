let n = 12
let c = 20
let t = 'multiple'
let d = 'hard'

fetch(`https://opentdb.com/api.php?amount=${n}&category=${c}&difficulty=${d}&type=${t}`)
    .then((response) => response.json())
    .then((data) => printCards(data))
    
function printCards(questions) {
    console.log(questions);
}



