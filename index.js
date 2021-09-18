const pushWrapper = require('push-wrapper')
const midi = require('midi')

const input = new midi.Input()
const numPorts = input.getPortCount()
//Just connect the Ableton after everything else. What could go wrong?

// for(var i = 0; i < numPorts; i++){
//     input.openPort(i)
// }
input.openPort(1)
input.on('message', (deltaTime, message)=>{
    console.log(message)
})
// const push = pushWrapper.push()
// push.onMidiToHardware(console.log)
// console.log('huh?')
// const gridSelectButton = push.gridSelectButtons()[0]
// gridSelectButton.onPressed(()=>{
//     console.log('pressed!')
// })
// push.clearLCD()
// push.button('TapTempo').ledOn() 
// process.stdin.resume()
// // push.button('TapTempo').ledOn() // prints [176, 3, 4] to console