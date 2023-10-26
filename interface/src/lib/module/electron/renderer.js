import { settings, changeableAssets } from "$lib/store/settings.store";

// @ts-ignore
window.electronAPI.loadSettings();
// @ts-ignore
let x = window.electronAPI.loadSettings();

// @ts-ignore
window.electronAPI.getSettings((e, data) => {
  // settings.set({
  //   IKPFileAddress: data.settings.ikp,
  //   EGOVFileAddress: data.settings.egov,
  //   PersantikFileAddress: data.settings.persantik,
  // });

  changeableAssets.set(data.assets);
});

document.addEventListener("settings-save", (e) => {
  // @ts-ignore
  window.electronAPI.saveSettings(e.detail.data);
  window.location.reload();
});
