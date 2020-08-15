//NOTE: the alarm plays through completely the first time, but then after, once you presss button a it stops
let lightlevl = 0
let aPressed = false

basic.forever(function () {
    lightlevl = input.lightLevel()
    if( (lightlevl > 20) && (!aPressed) ) {
        Alarm()
        } 
})

function Alarm() {
    //alarm
        music.playMelody("C5 G A E F C F G ", 120)
    //waits
        basic.pause(1000)
    //checks if button a is pressed
        input.onButtonPressed(Button.A, () => {
            //stops playing
            music.stopMelody(MelodyStopOptions.All)
            aPressed = true
    //checks if button b is pressed
        input.onButtonPressed(Button.B, () => {
            aPressed = false
    } )
    })
}