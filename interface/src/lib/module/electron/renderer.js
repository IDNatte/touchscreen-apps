// import {get} from 'svelte/store'
import { settings } from "$lib/store/settings.store";

window.electronAPI.loadSettings();

window.electronAPI.getSettings((e, data) => {
  settings.set({
    IKPFileAddress: data.ikp,
    EGOVFileAddress: data.egov,
    PersantikFileAddress: data.persantik,
  });
});

document.addEventListener("settings-save", (e) => {
  window.electronAPI.saveSettings(e.detail.data);
  window.location.reload();
});
