const liveServer = require('live-server');
const openfinConfigBuilder = require('openfin-config-builder');
const openfinLauncher = require('openfin-launcher');
const path = require('path');

const port = process.env.npm_package_config_port || 5000;
const target = 'http://localhost:' + port;
const configPath = path.resolve('public/app.json');
const serverParams = {
    port: port,
    host: '0.0.0.0',
    root: path.resolve('public'),
    open: false,
    logLevel: 2
};

//Start the server server
liveServer.start(serverParams);

//Update our config and launch openfin.
openfinConfigBuilder.update({
    startup_app: {
        url: target + '/index.html',
        applicationIcon: target + '/favicon.ico'
    },
    runtime: {
        arguments: '--remote-debugging-port=9090',
        version: 'beta'
    },
    shortcut: {
        icon: target + '/favicon.ico'
    }
}, configPath)
.then(openfinLauncher.launchOpenFin({ configPath: configPath }))
.catch(err => console.log(err));
