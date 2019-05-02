import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ofVersion: string = '';

  constructor() {
    if (typeof fin !== 'undefined') {
      this.init();
    } else {
      this.ofVersion = 'The fin API is not available - you are probably running in a browser.';
    }
  }

  async init() {
    //get a reference to the current Application.
    const app = await fin.Application.getCurrent();
    const win = await fin.Window.getCurrent();

    this.ofVersion = await fin.System.getVersion();

    //Only launch new windows from the main window.
    if (win.identity.name === app.identity.uuid) {
      //subscribing to the run-requested events will allow us to react to secondary launches, clicking on the icon once the Application is running for example.
      //for this app we will  launch a child window the first the user clicks on the desktop.
      app.once('run-requested', async () => {
        await fin.Window.create({
          name: 'childWindow',
          url: location.href,
          defaultWidth: 320,
          defaultHeight: 320,
          autoShow: true
        });
      });
    }
  }
}
