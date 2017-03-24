//event listeners.
document.addEventListener('DOMContentLoaded', function() {
    const ofVersion = document.querySelector('#of-version');
    if (fin) {
        fin.desktop.System.getVersion(function(version) {
            ofVersion.innerText = version;
        });
    } else {
        ofVersion.innerText = 'OpenFin is not available - you are probably running in a browser.';
    }
});
