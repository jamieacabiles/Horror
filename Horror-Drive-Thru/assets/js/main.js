"use strict";
const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (!motion.matches && document.querySelector(".hero"))
  document.body.classList.add("opening");
motion.addEventListener("change", () => {
  if (motion.matches) document.body.classList.remove("opening");
});

document.body.classList.add("js-menu");
const menu = document.querySelector(".mobile-menu");
const menuTrigger = menu.querySelector("summary");
const closeMenu = () => {
  menu.open = false;
  menuTrigger.focus();
};
menu.querySelector(".menu-close").addEventListener("click", closeMenu);
menu.addEventListener("toggle", () => {
  menuTrigger.setAttribute("aria-expanded", String(menu.open));
  if (menu.open) menu.querySelector(".menu-close").focus();
});
document.addEventListener("keydown", (event) => {
  if (!menu.open) return;
  if (event.key === "Escape") {
    event.preventDefault();
    closeMenu();
  }
  if (event.key === "Tab") {
    const items = [...menu.querySelectorAll("nav button, nav a")];
    const first = items[0],
      last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    }
    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
document.addEventListener("click", (event) => {
  if (menu.open && !menu.contains(event.target)) menu.open = false;
});
window.matchMedia("(min-width: 1000px)").addEventListener("change", (event) => {
  if (event.matches) menu.open = false;
});

const warning = document.querySelector(".warning");
if (warning && !motion.matches && "IntersectionObserver" in window) {
  warning.classList.add("reveal-ready");
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        warning.classList.add("is-visible");
        observer.disconnect();
      }
    },
    { threshold: 0.12 },
  );
  observer.observe(warning);
}

const gallery = document.querySelector(".gallery");
if (gallery) {
  document.querySelector(".gallery-controls").hidden = false;
  const scrollGallery = (direction) =>
    gallery.scrollBy({
      left: direction * gallery.clientWidth * 0.75,
      behavior: motion.matches ? "instant" : "smooth",
    });
  document
    .querySelectorAll("[data-gallery-direction]")
    .forEach((button) =>
      button.addEventListener("click", () =>
        scrollGallery(Number(button.dataset.galleryDirection)),
      ),
    );
  gallery.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      scrollGallery(event.key === "ArrowRight" ? 1 : -1);
    }
  });
}

const form = document.querySelector(".booking-form");
if (form) {
  const confirmation = form.querySelector(".confirmation");
  const summary = form.querySelector(".booking-summary p");
  const getChoice = () => {
    const values = new FormData(form);
    return {
      date: values.get("dato"),
      time: values.get("tid"),
      quantity: Number(values.get("antal")),
    };
  };
  const description = ({ date, time, quantity }) =>
    `${date}. oktober 2026 · kl. ${time}${time === "24.00" ? " (midnat til næste dag)" : ""} · ${quantity} ${quantity === 1 ? "bil" : "biler"}`;
  form.addEventListener("input", () => {
    const choice = getChoice();
    confirmation.hidden = true;
    summary.textContent =
      choice.date && choice.time && form.elements.antal.validity.valid
        ? `Dit valg: ${description(choice)}`
        : `Dato: ${choice.date ? choice.date + ". oktober" : "ikke valgt"} · Tid: ${choice.time || "ikke valgt"} · Antal biler: ${Number.isInteger(choice.quantity) && choice.quantity > 0 ? choice.quantity : "vælg et helt antal fra 1 til 99"}`;
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    form.querySelector(".confirmation-details").textContent =
      description(getChoice());
    confirmation.hidden = false;
    confirmation.focus();
  });
  form.querySelector(".confirm").disabled = false;
}
