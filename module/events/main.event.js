const { ipcMain } = require("electron");
const Database = require("../database/index");

const settings = new Database("touchapps/settings");

module.exports = function rendererEventModule() {
  ipcMain.on("save-settings", (event, data) => {
    let settingsConfig = settings.getCollection("settings");
    let changeableAssets = settings.getCollection("changeableAssets");

    let changeableAssetsUpdate = changeableAssets.get(1);
    let settingsUpdate = settingsConfig.get(1);

    settingsUpdate.settings.ikp = data.ikp;
    settingsUpdate.settings.egov = data.egov;
    settingsUpdate.settings.persantik = data.persantik;

    changeableAssetsUpdate.assets.hos = data.hos;
    changeableAssetsUpdate.assets.secretary = data.secretary;
    changeableAssetsUpdate.assets.structure = data.structure;
    changeableAssetsUpdate.assets.absent = data.absent;

    settingsConfig.update(settingsUpdate);
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
      let initIfEmpty = settings.createCollection("settings");
      initIfEmpty.insert({
        settings: {
          ikp: "https://raw.githubusercontent.com/IDNatte/item_kominfo/master/egov_infra/data.pdf",
          egov: "https://raw.githubusercontent.com/IDNatte/item_kominfo/master/egov_infra/data.pdf",
          persantik:
            "https://raw.githubusercontent.com/IDNatte/item_kominfo/master/egov_infra/data.pdf",
        },
      });

      let changeableAssets = settings.createCollection("changeableAssets");

      changeableAssets.insert({
        assets: {
          hos: "https://web.tapinkab.go.id/tempstorage/images/kadis.png",
          secretary: "https://web.tapinkab.go.id/tempstorage/images/kadis.png",
          structure:
            "https://web.tapinkab.go.id/tempstorage/images/strukturorg",
          absent:
            "https://docs.google.com/forms/d/e/1FAIpQLSeu1tdb9ExSw6lEZkSmT2XL4e59GfkQpMwgnj52jlLKrf1loA/viewform?embedded=true",
        },
      });

      let data = {
        settings: initIfEmpty.get(1).settings,
        assets: changeableAssets.get(1).assets,
      };

      event.sender.send("load-settings", data);
    }
  });
};
