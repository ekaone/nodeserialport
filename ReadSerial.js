/**
 * Change COM5 as your Port detected
 */

const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
const port = new SerialPort("COM5", { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: "\n" }));

// Read port data
port.on("open", () => {
  console.log("serial port open");
});
parser.on("data", data => {
  console.log("Got word from arduino:", data);
});

