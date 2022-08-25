import { CLASSES, DOM } from "./constants.js";

function openModal(modal) {
  if (!modal) return;

  DOM.body.classList.add(CLASSES.scrollHidden);
  modal.classList.add(CLASSES.active);
}

function closeModal(modal) {
  if (!modal) return;

  modal.classList.remove(CLASSES.active);
  DOM.body.classList.remove(CLASSES.scrollHidden);
}

export function controlModal() {
  const openModalButtons = document.querySelectorAll("[data-modal-target]");
  const closeModalButtons = document.querySelectorAll("[data-modal-close]");
  const modals = document.querySelectorAll(".modal");

  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.getElementById(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(`.${CLASSES.modal}`);
      closeModal(modal);
    });
  });
}
