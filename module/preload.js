const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  version: () => process.version.node,
});
