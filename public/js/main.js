//register service worker
navigator.serviceWorker.register('../serviceworker.js');

//event listeners.
document.addEventListener('DOMContentLoaded', () => {
  if (typeof fin != 'undefined') {
    fin.desktop.main(onMain);
  } else {
    ofVersion.innerText =
      'OpenFin is not available - you are probably running in a browser.';
  }
});

//once the DOM has loaded and the OpenFin API is ready
function onMain() {
    //get a reference to the current Application.
    const app = fin.desktop.Application.getCurrent();

    //we will increment on child window creation.
    let winNumber = 0;

    //we get the current OpenFin version
    fin.desktop.System.getVersion(version => {
        const ofVersion = document.querySelector('#of-version');
        ofVersion.innerText = version;
    });

    //subscribing to the run-requested events will allow us to react to secondary launches, clicking on the icon once the Application is running for example.
    //for this app we will launch child windows everytime the user clicks on the desktop.
    app.addEventListener('run-requEsted', () => {
        const win = fin.desktop.Window.getCurrent();
        //Only launch new windows from the main window.
        if (win.name === app.uuid) {
            var cWin = new fin.desktop.Window({
                name: `childWindow_${++winNumber}`,
                url: location.href,
                defaultWidth: 320,
                defaultHeight: 320,
                defaultTop: 10,
                defaultLeft: 300,
                autoShow: true
            }, function () {
               console.log('Child Window created');
            }, function (error) {
                console.log(error);
            });
        }
    });
}
