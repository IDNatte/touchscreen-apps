const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const mainWin = new BrowserWindow({
    width: 800,
    height: 600,
    // webPreferences: {
    //   preload: path.join(__dirname, "preload.js"),
    // },
  });

  if (process.env.ITCH_GLS_ENV === "dev") {
    mainWin.loadURL("http://localhost:3000/");
  } else {
    mainWin.loadFile(path.join(__dirname, "interface/layout/index.html"));
  }

  mainWin.setFullScreen(true);
}

app.whenReady().then(() => {
  createWindow();

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
