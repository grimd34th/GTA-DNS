var utils = require("./utils");
const LOCAL_IP = "207.12.89.250"; // ************* Change to the IP address of the machine you are running the DNS proxy and Web server on *************

console.log("Starting GTA-DNS - Let the hacking begin :)");
utils.startDnsProxy(LOCAL_IP);
utils.startWebServer(LOCAL_IP);
