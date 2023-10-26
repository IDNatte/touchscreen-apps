const { ipcMain } = require("electron");
const Database = require("../database/index");

const settings = new Database("touchapps/settings");

module.exports = function rendererEventModule() {
  ipcMain.on("save-settings", (event, data) => {
    // let settingsConfig = settings.getCollection("settings");
    let changeableAssets = settings.getCollection("changeableAssets");

    let changeableAssetsUpdate = changeableAssets.get(1);
    // let settingsUpdate = settingsConfig.get(1);

    // settingsUpdate.settings.ikp = data.ikp;
    // settingsUpdate.settings.egov = data.egov;
    // settingsUpdate.settings.persantik = data.persantik;

    changeableAssetsUpdate.assets.hosName = data.hosName;
    changeableAssetsUpdate.assets.secretaryName = data.secretaryName;
    changeableAssetsUpdate.assets.hosNip = data.hosNip;
    changeableAssetsUpdate.assets.secretaryNip = data.secretaryNip;
    changeableAssetsUpdate.assets.qrcodeAbsent = data.qrcodeAbsent;

    changeableAssetsUpdate.assets.hos = data.hos;
    changeableAssetsUpdate.assets.secretary = data.secretary;
    changeableAssetsUpdate.assets.structure = data.structure;
    changeableAssetsUpdate.assets.absent = data.absent;

    // settingsConfig.update(settingsUpdate);
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
      // let initIfEmpty = settings.createCollection("settings");
      // initIfEmpty.insert({
      //   settings: {
      //     ikp: "https://raw.githubusercontent.com/IDNatte/item_kominfo/master/egov_infra/data.pdf",
      //     egov: "https://raw.githubusercontent.com/IDNatte/item_kominfo/master/egov_infra/data.pdf",
      //     persantik:
      //       "https://raw.githubusercontent.com/IDNatte/item_kominfo/master/egov_infra/data.pdf",
      //   },
      // });

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
        // settings: initIfEmpty.get(1).settings,
        assets: changeableAssets.get(1).assets,
      };

      event.sender.send("load-settings", data);
    }
  });
};
