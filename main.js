const { app, BrowserWindow } = require("electron");
const path = require("path");

const rendererEventModule = require("./module/events/main.event");

function createWindow() {
  const mainWin = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "module/preload.js"),
    },
  });

  if (process.env.TOUCHSCREENAPP === "dev") {
    mainWin.loadURL("http://localhost:3000/");
  } else {
    mainWin.loadFile(path.join(__dirname, "interface/layout/index.html"));
    // mainWin.setFullScreen(true);
    mainWin.maximize()
  }
}

app.whenReady().then(() => {
  createWindow();
  rendererEventModule();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
