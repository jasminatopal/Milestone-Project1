const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const genres = [
    {
    name: 'General',
    id: 9
},

    {
    name: 'Books',
    id: 10
},

{   
    name: 'Film',
    id: 11
},

{
    name: 'Music',
    id: 12
},

]
const levels = ['easy', 'medium', 'hard']

//create div using js 
function addGenre(genre) {
    const column = document.createElement("div")
    column.classList.add('genre-column')
    column.innerHTML =  genre.name
    game.appendChild(column)
    

levels.forEach(level => {
    const card = document.createElement("div")
    card.classList.add('card')
    column.appendChild(card)


//use fetch to generate the questions 
    fetch(`https://opentdb.com/api.php?amount=20&category=${genre.id}&difficulty=${level}&type=multiple`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        //
        card.setAttribute('data-question', data.results[0].question)
        card.setAttribute('data-answer', data.results[0].correct_answer)
        card.setAttribute('data-answer', data.results[0].incorrect_answers)
        card.setAttribute('data-value', card.getInnerHTML())
    })
        card.addEventListener('click', flipCard)
    })



//add score values to cards
if (levels === 'easy') {
    card.innerHTML = 1

}

if (levels === 'medium') {
    card.innerHTML = 3
}

if (levels === 'hard'){
    card.innerHTML = 5
}


}

genres.forEach(genre => addGenre(genre))

function flipCard() {
    console.log('clicked')
    const textDisplay = document.createElement("div")
    textDisplay.innerHTML = this.getAttribute('data-question')
 
}

const correctButton = document.createElement('button')
const incorrectButton = document.createElement('button')