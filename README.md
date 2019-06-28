# Hadouken Application Template

A simple unopinionated Hadouken application template. The purpose of this repository is to allow users to get started with Hadouken immediately by providing a development setup that does not require initial configuration. The setup has minimal dependencies and the feature set is intentionally limited. Any further configuration can be achieved by editing the `app.json` file: [Application Config](https://openfin.co/application-config/).

### What you get:

#### [Hadouken download and install](https://github.com/hadoukenio/js-adapter)

* Automates the downloading and launching of the Hadouken Runtime.

#### Development server

* [Live-server](https://www.npmjs.com/package/live-server) with built-in live reloading after changes to files.

#### Basic HTML/Javascript Template

* HTML 5 and ES6 Template with Hadouken integration.

#### Service Worker

* Uses the [network and cache](https://serviceworke.rs/strategy-network-or-cache.html) recipe found on the [Mozilla Service Worker Cookbook](https://serviceworke.rs/) to implement offline browsing.

#### [Visual Studio Code](https://code.visualstudio.com/) integration, thanks to @jcarter

* Attach to debugger for in-editor break points, call stacks, and an interactive console
* Hadouken configuration ( `app.json` ) smart completion based on available parameters
* Hadouken API smart completions based on variable types and function definitions

### How to use this:

* Clone this repository: `git clone https://github.com/HadoukenIO/app-template`
* Install the dependencies: `cd app-template` & `npm install`
* Start the live-server and launch the application: `npm start`
* Add your Javascript code to `main.js` and your HTML to `index.html`

## Contributing

1. Fork it (<https://github.com/HadoukenIO/app-template/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Read our [contribution guidelines](.github/CONTRIBUTING.md) and [Community Code of Conduct](https://www.finos.org/code-of-conduct)
4. Commit your changes (`git commit -am 'Add some fooBar'`)
5. Push to the branch (`git push origin feature/fooBar`)
6. Create a new Pull Request

## License
The code in this repository is distributed under the Apache License, Version 2.0.

However, if you run this code, it may call on the OpenFin RVM or OpenFin Runtime, which are covered by OpenFin's Developer, Community, and Enterprise licenses. You can learn more about OpenFin licensing at the links listed below or just email us at support@openfin.co with questions.

Copyright 2019 HadoukenIO

SPDX-License-Identifier: Apache-2.0

https://openfin.co/developer-agreement/

https://openfin.co/licensing/
