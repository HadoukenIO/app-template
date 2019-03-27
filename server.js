const liveServer = require('live-server');
const path = require('path');
const { launch, connect } = require('hadouken-js-adapter');

const serverParams = {
    root: path.resolve('public'),
    port: 5555,
    open: false,
    logLevel: 2
};

//To Launch the OpenFin Application we need a manifestUrl.
const manifestUrl = `http://localhost:${serverParams.port}/app.json`;

//Start the server server
liveServer.start(serverParams).on('listening', async () => {
    try {
        //Once the server is running we can launch OpenFin and retrieve the port.
        const port = await launch({ manifestUrl });

        //We will use the port to connect from Node to determine when OpenFin exists.
        const fin = await connect({
            uuid: 'server-connection', //Supply an addressable Id for the connection
            address: `ws://localhost:${port}`, //Connect to the given port.
            nonPersistent: true //We want OpenFin to exit as our application exists.
        });

        //Once OpenFin exists we shut down the server.
        fin.once('disconnected', process.exit);
    } catch (err) {
        console.error(err);
    }
});
