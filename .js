let currentHomeScore = 0

let currentAwayScore = 0

const currentHomeScoreElement = document.getElementById('currentHomeScore')

const currentAwayScoreElement = document.getElementById('currentAwayScore')

currentHomeScoreElement.innerText = currentHomeScore

currentAwayScoreElement.innerText = currentAwayScore

function scoreHome1() {
    currentHomeScore += 1
    currentHomeScoreElement.innerText = currentHomeScore
    console.log(`Current Home Score: ${currentHomeScore}`)
}

function scoreAway1() {
    currentAwayScore += 1
    console.log(`Current Away Score: ${currentAwayScore}`)
    currentAwayScoreElement.innerText = currentAwayScore
}
function scoreHome2() {
    currentHomeScore += 2
    currentHomeScoreElement.innerText = currentHomeScore
    console.log(`Current Home Score: ${currentHomeScore}`)
}

function scoreAway2() {
    currentAwayScore += 2
    console.log(`Current Away Score: ${currentAwayScore}`)
    currentAwayScoreElement.innerText = currentAwayScore
}
function scoreHome3() {
    currentHomeScore += 3
    currentHomeScoreElement.innerText = currentHomeScore
    console.log(`Current Home Score: ${currentHomeScore}`)
}

function scoreAway3() {
    currentAwayScore += 3
    console.log(`Current Away Score: ${currentAwayScore}`)
    currentAwayScoreElement.innerText = currentAwayScore
}

function scoreHomeReset() {
    currentHomeScore = 0
    currentHomeScoreElement.innerText = currentHomeScore
    console.log(`Current Home Score: ${currentHomeScore}`)
}

function scoreAwayReset() {
    currentAwayScore = 0
    console.log(`Current Away Score: ${currentAwayScore}`)
    currentAwayScoreElement.innerText = currentAwayScore
}