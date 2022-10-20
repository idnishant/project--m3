radio.onReceivedNumber(function (receivedNumber) {
    let recivedNumber = 0
    if (dice < recivedNumber) {
        basic.showIcon(IconNames.TShirt)
    }
    if (dice > recivedNumber) {
        basic.showIcon(IconNames.Square)
    }
})
input.onGesture(Gesture.Shake, function () {
    dice = randint(1, 6)
    if (dice == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        radio.sendNumber(dice)
    }
    if (dice == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            . . . . .
            . . . . .
            `)
        radio.sendNumber(dice)
    }
    if (dice == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . #
            . . . . .
            . . . . .
            `)
        radio.sendNumber(dice)
    }
    if (dice == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
        radio.sendNumber(dice)
    }
    if (dice == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        radio.sendNumber(dice)
    }
    if (dice == 6) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
        radio.sendNumber(dice)
    }
})
let dice = 0
basic.showString("\"Dice Game\"")
basic.forever(function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.twinkle), SoundExpressionPlayMode.UntilDone)
})
