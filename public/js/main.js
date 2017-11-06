//event listeners.
document.addEventListener('DOMContentLoaded', () => {

    if (typeof fin != 'undefined') {
        fin.desktop.main(onMain);
    } else {
        ofVersion.innerText = 'OpenFin is not available - you are probably running in a browser.';
    }
});

//Once the DOM has loaded and the OpenFin API is ready
function onMain() {
    async function windowAction(action) {
        const app = await fin.Application.getCurrent();
        const win = await app.getWindow();
        let finPromise;

        switch (action) {
            case 'move':
                finPromise = await win.moveTo(580, -100);
            case 'resize':
                finPromise = await win.resizeTo(580, 300, 'top-left');
            case 'hide':
                finPromise = await win.hide();
        }
        return await finPromise;
    }

    const app = fin.desktop.Application.getCurrent();
    fin.desktop.System.showDeveloperTools(app.uuid, app.uuid);
    fin.desktop.System.getVersion(version => {
        const ofVersion = document.querySelector('#of-version');
        ofVersion.innerText = version;
    });

    const moveButton = document.getElementById('move-window')
    const resizeButton = document.getElementById('resize-window')
    const hideButton = docucment.getElementById('hide-window')
    
    moveButton.addEventListener('click', () => {
        windowAction('move')
        .then(() => console.log('Applciation window moved'))
        .catch(err => console.error(err));
    });

    hideButton.addEventListener('click', () => {
        windowAction('hide')
        .then(() => console.log('Application is node hidden'))
        .catch(err => console.error(err));
    });

    resizeButton.addEventListener('click', () => {
        windowAction('resize')
        .then(() => console.log('Resized Application window'))
        .catch(err => console.error(err));
    });
}
