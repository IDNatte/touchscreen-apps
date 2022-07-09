import { writable } from "svelte/store";

export const modal = writable({ show: false, modal: null });
