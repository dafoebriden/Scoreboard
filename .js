let currentHomeScore = 0

let currentAwayScore = 0

const currentHomeScoreElement = document.getElementById('currentHomeScore')
const currentAwayScoreElement = document.getElementById('currentAwayScore')
const game = document.getElementById('gameCube')
const ctx = game.getContext("2d")

const dpr = window.devicePixelRatio;
const rect = gameCube.getBoundingClientRect()
gameCube.width = rect.width * dpr
gameCube.height = rect.height * dpr
ctx.scale(dpr, dpr)
gameCube.style.width = `${rect.width}px`
gameCube.style.height = `${rect.height}px`



ctx.fillStyle = "FF0000"
ctx.fillRect(5, 50, 3, 34)
ctx.fillRect(292, 50, 3, 34)
ctx.beginPath()
ctx.arc(155, 67, 5, 0, 2 * Math.PI)
ctx.stroke()

currentHomeScoreElement.innerText = currentHomeScore

currentAwayScoreElement.innerText = currentAwayScore

function scoreHome1() {
    currentHomeScore += 1
    currentHomeScoreElement.innerText = currentHomeScore
    console.log(`Current Home Score: ${currentHomeScore} `)
}

function scoreAway1() {
    currentAwayScore += 1
    console.log(`Current Away Score: ${currentAwayScore} `)
    currentAwayScoreElement.innerText = currentAwayScore
}
function scoreHome2() {
    currentHomeScore += 2
    currentHomeScoreElement.innerText = currentHomeScore
    console.log(`Current Home Score: ${currentHomeScore} `)
}

function scoreAway2() {
    currentAwayScore += 2
    console.log(`Current Away Score: ${currentAwayScore} `)
    currentAwayScoreElement.innerText = currentAwayScore
}
function scoreHome3() {
    currentHomeScore += 3
    currentHomeScoreElement.innerText = currentHomeScore
    console.log(`Current Home Score: ${currentHomeScore} `)
}

function scoreAway3() {
    currentAwayScore += 3
    console.log(`Current Away Score: ${currentAwayScore} `)
    currentAwayScoreElement.innerText = currentAwayScore
}

function scoreHomeReset() {
    currentHomeScore = 0
    currentHomeScoreElement.innerText = currentHomeScore
    console.log(`Current Home Score: ${currentHomeScore} `)
}

function scoreAwayReset() {
    currentAwayScore = 0
    console.log(`Current Away Score: ${currentAwayScore} `)
    currentAwayScoreElement.innerText = currentAwayScore
}