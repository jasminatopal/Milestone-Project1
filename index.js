const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const general = 20
const levels = ['easy', 'medium', 'hard']

//column is not working 
function addGenre(){
    const column = document.createElement("div")
    column.classList.add('genre-column')
    column.innerHTML = 'genre goes here'
    game.appendChild(column)
    
//use fetch to generate the questions 
levels.forEach(level => {
    const card = document.createElement("div")
    card.classList.add('card')
    column.appendChild(card)


    fetch(`https://opentdb.com/api.php?amount=20&category=9&difficulty=${level}&type=multiple`)
    .then(response => response.json())
    .then(data => console.log(data))


})

}

addGenre()