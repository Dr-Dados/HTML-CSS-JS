"use strict";

const panels = document.querySelectorAll(".panel");

for (let item of panels) {
  item.addEventListener("click", () => {
    removeActivePanels();
    item.classList.add("active");
  });
}

const removeActivePanels = () => {
  for (let item of panels) {
    item.classList.remove("active");
  }
};
