const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  loadSettings: () => {
    ipcRenderer.send("load-settings");
  },
  getSettings: (callback) => {
    ipcRenderer.on("load-settings", callback);
  },
  saveSettings: (data) => {
    ipcRenderer.send("save-settings", data);
  },
});
