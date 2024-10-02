let Funk = 0
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Funk += 1
    basic.showNumber(Funk)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    radio.sendNumber(Funk)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Funk += -1
    basic.showNumber(Funk)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
