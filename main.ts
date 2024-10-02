radio.onReceivedNumber(function (receivedNumber) {
    if (0 == _1) {
        basic.showNumber(receivedNumber)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (0 == _1) {
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
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (0 == _1) {
        radio.sendNumber(Funk)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (_1 == 0) {
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
    }
})
let Funk = 0
let _1 = 0
_1 = 1
radio.setGroup(44)
basic.showLeds(`
    # . # . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    # . # . .
    # # # . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    # . # . .
    # # # . .
    . . # . #
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    # . # . .
    # # # . .
    . . # . #
    . . # # #
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    # . # . .
    # # # . .
    . . # . #
    . . # # #
    . . . . #
    `)
basic.showString("System start")
_1 = 0
