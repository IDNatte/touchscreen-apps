import { modal } from "$lib/store/modal.store";
import { get } from "svelte/store";

export function openModal(modalId) {
  modal.set({ show: true, modal: modalId });
}

export function closeModal(modalId) {
  console.log(get(modal));
}
