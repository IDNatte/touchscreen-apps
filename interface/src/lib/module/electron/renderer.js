// @ts-nocheck
// @ts-ignore
import { changeableAssets } from "$lib/store/settings.store";

window.electronAPI.loadSettings();

window.electronAPI.getSettings((e, data) => {
  changeableAssets.set(data.assets);
});

document.addEventListener("settings-save", (e) => {
  window.electronAPI.saveSettings(e.detail.data);
  window.location.reload();
});
