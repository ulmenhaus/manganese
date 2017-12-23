const {app, BrowserWindow} = require('electron');
const shell = require('electron').shell;
const globalShortcut = require('electron').globalShortcut;

let win

function createWindow () {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false
    },
    width: 800,
    height: 600,
    frame: false}
			 );

  win.loadURL('https://web.telegram.org');

  win.webContents.on('new-window', (event, url, frameName, disposition, options, additionalFeatures) => {
    event.preventDefault();
    shell.openExternal(url);
  });
  return win;
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
