const {app, BrowserWindow} = require('electron');
const shell = require('electron').shell;

let mainWindow;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    frame: false,
  });
  mainWindow.loadURL('file://' + __dirname + '/browser.html');
  // mainWindow.openDevTools();
  mainWindow.webContents.on('new-window', (event, url) => {
    event.preventDefault();
    shell.openExternal(url);
  })
});

app.on("browser-window-focus", () => {
  mainWindow.webContents.executeJavaScript('focusActiveSpace();');
})
