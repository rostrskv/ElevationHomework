"use strict"
const playingField = document.getElementById("playing-field")
const upButton = document.getElementById("up")
const leftButton = document.getElementById("left")
const rightButton = document.getElementById("right")
const downButton = document.getElementById("down")
const ball = document.getElementById("ball")
const moveStep = 15

const move = function (leftIncrement = 0, topIncrement = 0) {
    const leftPosition = (parseInt(ball.style.left) || 0) + leftIncrement
    ball.style.left = `${leftPosition}px`
    const topPosition = (parseInt(ball.style.top) || 0) + topIncrement
    ball.style.top = `${topPosition}px`
}

const moveLeft = function () {
    move(-moveStep, 0)
}
const moveRight = function () {
    return move(moveStep, 0)
}
const moveUp = function () {
    return move(0, -moveStep)
}
const moveDown = function () {
    return move(0, moveStep)
}

const addHandlers = function () {
    upButton.onclick = moveUp
    leftButton.onclick = moveLeft
    rightButton.onclick = moveRight
    downButton.onclick = moveDown
}

const addHeaders = function () {
    const header = document.createElement("h1")
    header.innerHTML = "The Best Game Ever"
    header.style.color = "#c0392b"
    header.style.fontFamily = "Helvetica"
    document.body.appendChild(header)

    const subHeader = document.createElement("h2")
    subHeader.innerHTML = "Game by: ~The Creator~"
    subHeader.classList.add("sub-header")
    document.body.appendChild(subHeader)
}

addHeaders()
addHandlers()