"use strict"
const playingField = document.getElementById("playing-field")
const upButton = document.getElementById("up")
const leftButton = document.getElementById("left")
const rightButton = document.getElementById("right")
const downButton = document.getElementById("down")
const ball = document.getElementById("ball")
const moveStep = 15
const fieldWidth = playingField.clientWidth - ball.offsetWidth
const fieldHeight = playingField.clientWidth - ball.offsetWidth

const move = function (leftIncrement, topIncrement ) {
    const leftPosition = (parseInt(ball.style.left) || 0) + leftIncrement
    console.log(leftPosition)
    if (leftPosition >= 0 && leftPosition < fieldWidth) {
        ball.style.left = `${leftPosition}px`
    }
    const topPosition = (parseInt(ball.style.top) || 0) + topIncrement
    if (topPosition >= 0 && topPosition < fieldHeight) {
        ball.style.top = `${topPosition}px`
    }
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

const keyHandler = function (event) {
    switch (event.key) {
        case "ArrowLeft":
            moveLeft()
            break
        case "ArrowRight":
            moveRight()
            break
        case "ArrowUp":
            moveUp()
            break
        case "ArrowDown":
            moveDown()
            break
    }
}

const addHandlers = function () {
    upButton.onclick = moveUp
    leftButton.onclick = moveLeft
    rightButton.onclick = moveRight
    downButton.onclick = moveDown
    document.onkeydown = keyHandler
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
move(0, 0)