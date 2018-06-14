# Hadouken Application Template

A simple unopinionated Hadouken application template. The purpose of this repository is to allow users to get started with Hadouken immediately by providing a development setup that does not require initial configuration. The setup has minimal dependencies and the feature set is intentionally limited. Any further configuration can be achieved by editing the `app.json` file: [Application Config](https://openfin.co/application-config/).

### What you get:

#### [Application-Launcher](https://www.npmjs.com/package/openfin-launcher)

* Automates the downloading and launching of the Hadouken Runtime.

#### Development server

* [Live-server](https://www.npmjs.com/package/live-server) with built-in live reloading after changes to files.

#### Basic HTML/Javascript Template

* HTML 5 and ES6 Template with Hadouken integration.

#### Service Worker

* Uses the [network and cache](https://serviceworke.rs/strategy-network-or-cache.html) recipe found on the [Mozilla Service Worker Cookbok](https://serviceworke.rs/) to implement offline browsing.

#### [Visual Studio code](https://code.visualstudio.com/) integration, thanks to @jcarter

* Attach to debugger for in-editor break points, call stacks, and an interactive console
* Hadouken configuration ( `app.json` ) smart completion based on available parameters
* Hadouken API smart completions based on variable types and function definitions

### How to use this:

* Clone this repository: `git clone https://github.com/HadoukenIO/app-template`
* Install the dependencies: `cd app-template` & `npm install`
* Start the live-server and launch the application: `npm start`
* Add your Javascript code to `main.js` and your HTML to `index.html`
