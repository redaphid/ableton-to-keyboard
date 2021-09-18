const pushWrapper = require('push-wrapper')
const push = pushWrapper.push()
push.onMidiToHardware(console.log)
console.log('huh?')
const gridSelectButton = push.gridSelectButtons()[0]
gridSelectButton.onPressed(()=>{
    console.log('pressed!')
})
push.clearLCD()
push.button('TapTempo').ledOn() 
process.stdin.resume()
// push.button('TapTempo').ledOn() // prints [176, 3, 4] to console