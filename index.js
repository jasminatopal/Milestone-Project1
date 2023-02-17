const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const tv = 11
const levels = ['easy', 'medium', 'hard']

function addGenre(){
    const column = document.createElement('div')
    column.classList.add('genre-column')
    column.innerHTML = 'this is a genre'
    game.append(column)
}

addGenre()