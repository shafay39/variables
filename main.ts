input.onButtonPressed(Button.A, function () {
    scoreVariable += 1
})
input.onButtonPressed(Button.AB, function () {
    scoreVariable = 0
})
input.onButtonPressed(Button.B, function () {
    scoreVariable += -1
})
let scoreVariable = 0
scoreVariable = 0
basic.forever(function () {
    basic.showNumber(scoreVariable,50)
})
