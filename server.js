const liveServer = require('live-server');
const openfinLauncher = require('openfin-launcher');
const path = require('path');

const configPath = path.resolve('public/app.json');
const serverParams = {
    root: path.resolve('public'),
    port: 5555,
    open: false,
    logLevel: 2
};

//Update our config and launch openfin.
function launchOpenFin() {
    openfinLauncher.launchOpenFin({ configPath })
    .then(() => process.exit())
    .catch(err => console.log(err));
}

//Start the server server and launch our app.
liveServer.start(serverParams).on('listening', () => {
    launchOpenFin();
});
