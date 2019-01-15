
const configureServer = require('./config');


const server = configureServer();

const PORT = 8081;
server.listen(PORT, function () {
    const displayMessage = `
  ############################
  #   Treamstack     #
  ############################
  # Port: ${PORT}
  ############################
  `;

    console.log(displayMessage);
});
