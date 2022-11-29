import { modal } from "$lib/store/modal.store";

export function openModal(modalId) {
  modal.set({ show: true, class: modalId });
}

export function closeModal(modalId) {
  modal.set({ show: false, class: modalId });
}
