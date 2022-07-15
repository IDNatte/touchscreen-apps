import { settings, changeableAssets } from "$lib/store/settings.store";

window.electronAPI.loadSettings();

window.electronAPI.getSettings((e, data) => {
  settings.set({
    IKPFileAddress: data.settings.ikp,
    EGOVFileAddress: data.settings.egov,
    PersantikFileAddress: data.settings.persantik,
  });

  changeableAssets.set(data.assets);
});

document.addEventListener("settings-save", (e) => {
  window.electronAPI.saveSettings(e.detail.data);
  window.location.reload();
});
