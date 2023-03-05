const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')
let score = 0

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


//add score values to cards 
if (level === 'easy') {
    card.innerHTML = 100
    

}

if (level === 'medium') {
    card.innerHTML = 300

}

if (level === 'hard'){
    card.innerHTML = 500
}

//use fetch to generate the questions 
fetch(`https://opentdb.com/api.php?amount=1&category=${genre.id}&difficulty=${level}&type=multiple`)
.then(response => response.json())
.then(data => {
    console.log(data)
    card.setAttribute('data-question', data.results[0].question)
    card.setAttribute('data-answer', data.results[0].correct_answer)
    card.setAttribute('data-incorrectanswer1', data.results[0].incorrect_answers[0])
    card.setAttribute('data-incorrectanswer2', data.results[0].incorrect_answers[1])
    card.setAttribute('data-incorrectanswer3', data.results[0].incorrect_answers[2])
    card.setAttribute('data-value', card.innerHTML)
})
     .then(done => card.addEventListener('click', flipCard))
})

}


//for each loop to add the different genres
genres.forEach(genre => addGenre(genre))

//create context of card including buttons and data from api
function flipCard() {
    this.innerHTML = ''
    this.style.fontSize = '18px'
    const textDisplay = document.createElement("div")
    const correctButton = document.createElement("button")
    const incorrectButton1 = document.createElement("button")
    const incorrectButton2 = document.createElement("button")
    const incorrectButton3 = document.createElement("button")

    textDisplay.innerHTML = this.getAttribute('data-question')
    correctButton.innerHTML = this.getAttribute('data-answer')
    incorrectButton1.innerHTML = this.getAttribute('data-incorrectanswer1')
    incorrectButton2.innerHTML = this.getAttribute('data-incorrectanswer2')
    incorrectButton3.innerHTML = this.getAttribute('data-incorrectanswer3')

    correctButton.addEventListener('click', getResult)
    incorrectButton1.addEventListener('click', getResult)
    incorrectButton2.addEventListener('click', getResult)
    incorrectButton3.addEventListener('click', getResult)

    this.append(textDisplay, correctButton, incorrectButton1, incorrectButton2, incorrectButton3)

    //disable event listener to prevent from clicking on multipe questions at once
    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.removeEventListener('click', flipCard))
}


//funtion to get results when clicking a card 
function getResult() {

    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.addEventListener('click', flipCard))

//parent of the button is the card
    const buttonOnCard = this.parentElement
//if answer is correct add assigned value to the score
    if (buttonOnCard.getAttribute('data-answer') === this.innerHTML) {
        score = score + parseInt(buttonOnCard.getAttribute('data-value'))
        scoreDisplay.innerHTML = score; 
        buttonOnCard.classList.add('correct-answer') //<-- create classList to be able to change the color of the card in css
         buttonOnCard.removeEventListener('click', flipCard)

        //set time out to prevent other answer options to be clicked once and answer has be submitted
        setTimeout(() => {
            while (buttonOnCard.firstChild) {
                buttonOnCard.removeChild(buttonOnCard.lastChild)
            }
            buttonOnCard.innerHTML = buttonOnCard.getAttribute('data-value') 
        }, 100)
//if answer is incorrect below statement will run 

    } else {(buttonOnCard.classList.add('incorrect-answer'))
    
        setTimeout(() => {
            while (buttonOnCard.firstChild) {
                buttonOnCard.removeChild(buttonOnCard.lastChild)
            }
            buttonOnCard.innerHTML = 0

        }, 100)
    }
        buttonOnCard.removeEventListener('click', flipCard)
}



