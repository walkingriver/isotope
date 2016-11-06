const electron = require('electron');
const app = electron.app;
const Window = electron.BrowserWindow;

app.on('ready', _ => {
  console.log('hello, world');
  console.log(process.env);

  let mainWindow;

  mainWindow = new Window(
    {
      height: 640,
      width: 480
    }
  );

  mainWindow.on('closed', _ => {
    console.log('mainWindow closed');
    mainWindow = null;
  });

  if (process.env.WATCH) {
    mainWindow.loadURL('http://localhost:8100');
  } else {
    console.log(`Trying to open file://${__dirname}/../www/index.html`);
    mainWindow.loadURL(`file://${__dirname}/../www/index.html`);
  }
});
