const { ipcMain } = require("electron");
const Database = require("../database/index");

const settings = new Database("touchapps/settings");

module.exports = function rendererEventModule() {
  ipcMain.on("save-settings", (event, data) => {
    let changeableAssets = settings.getCollection("changeableAssets");

    let changeableAssetsUpdate = changeableAssets.get(1);

    changeableAssetsUpdate.assets.hosName = data.hosName;
    changeableAssetsUpdate.assets.secretaryName = data.secretaryName;
    changeableAssetsUpdate.assets.hosNip = data.hosNip;
    changeableAssetsUpdate.assets.secretaryNip = data.secretaryNip;
    changeableAssetsUpdate.assets.qrcodeAbsent = data.qrcodeAbsent;

    changeableAssetsUpdate.assets.hos = data.hos;
    changeableAssetsUpdate.assets.secretary = data.secretary;
    changeableAssetsUpdate.assets.structure = data.structure;
    changeableAssetsUpdate.assets.absent = data.absent;
    changeableAssetsUpdate.assets.skm = data.skm;

    changeableAssets.update(changeableAssetsUpdate);
  });

  ipcMain.on("load-settings", (event) => {
    try {
      let settingsOpt = settings.getCollection("settings");
      let changeableAssets = settings.getCollection("changeableAssets");
      let data = {
        settings: settingsOpt.get(1).settings,
        assets: changeableAssets.get(1).assets,
      };

      event.sender.send("load-settings", data);
    } catch (error) {
      let changeableAssets = settings.createCollection("changeableAssets");

      changeableAssets.insert({
        assets: {
          hosName: "Jhon Doe",
          hosNip: "12345678910111213141516",
          hos: "https://placehold.co/400x400",
          secretaryName: "Jane Doe",
          secretaryNip: "12345678910111213141516",
          secretary: "https://placehold.co/400x400",
          skm: "https://placehold.co/400x400",
          qrcodeAbsent: "https://placehold.co/400x400",
          structure: "https://placehold.co/400x400",
          absent: "https://placehold.co/400x400",
        },
      });

      let data = {
        assets: changeableAssets.get(1).assets,
      };

      event.sender.send("load-settings", data);
    }
  });
};
