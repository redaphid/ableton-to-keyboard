# ableton-to-keyboard
An extremely hacky way to use the ableton push 1 as a macro pad.
It uses [virtual-hid-tcp](https://github.com/nmelihsensoy/virtual-hid-tcp) to fake keyboard events
then [push-wrapper](https://github.com/crosslandwa/push-wrapper) to read from the push

For midi to work: Install the libasound2-dev package