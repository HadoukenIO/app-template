const liveServer = require('live-server');
const openfinLauncher = require('hadouken-js-adapter');
const path = require('path');

const manifestUrl = path.resolve('public/app.json');
const serverParams = {
    root: path.resolve('public'),
    port: 5555,
    open: false,
    logLevel: 2
};

//Update our config and launch openfin.
function launchOpenFin() {
    openfinLauncher.launch({ manifestUrl })
    .then(() => process.exit())
    .catch(err => console.log(err));
}

//Start the server server and launch our app.
liveServer.start(serverParams).on('listening', () => {
    launchOpenFin();
});
