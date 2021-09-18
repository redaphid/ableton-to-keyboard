const net = require('net');

const port = 8080;
const host = 'localhost';

// Create a new socket
const socket = new net.Socket();

// Establish a TCP connection
socket.connect(port, host);

const virtualKeyboardRequest = '30115'
socket.on('connect', () => {
    socket.write(virtualKeyboardRequest)
  console.log(`Established a TCP connection with ${host}:${port}`);
//   socket.destroy();
    socket.write(`${0x1d6}`)
});