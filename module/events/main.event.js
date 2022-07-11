const { ipcMain } = require("electron");
const Database = require("../database/index");

const settings = new Database("touchapps/settings");

module.exports = function rendererEventModule() {
  ipcMain.on("save-settings", (event, data) => {
    let settingsConfig = settings.getCollection("settings");
    let settingsUpdate = settingsConfig.get(1);

    settingsUpdate.settings.ikp = data.ikp;
    settingsUpdate.settings.egov = data.egov;
    settingsUpdate.settings.persantik = data.persantik;

    settingsConfig.update(settingsUpdate);
  });

  ipcMain.on("load-settings", (event) => {
    try {
      let settingsOpt = settings.getCollection("settings");
      let data = settingsOpt.get(1).settings;
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

      let data = initIfEmpty.get(1).settings;
      event.sender.send("load-settings", data);
    }
  });
};
