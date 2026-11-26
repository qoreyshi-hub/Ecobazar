"use strict";

// start counfig components
import { Logo } from "../components/logo/logo.js";
import { NavItem } from "../components/nav-item/nav-item.js";
import { ShopNowBtn } from "../components/shop-now-btn/shop-now-btn.js";
import { FeatureSite } from "../components/feature/feature.js";
import { Categories } from "../components/categories/categories.js";
import { Product } from "../components/product/product.js";

window.customElements.define("site-logo", Logo);
window.customElements.define("nav-item", NavItem);
window.customElements.define("shop-now", ShopNowBtn);
window.customElements.define("feature-site", FeatureSite);
window.customElements.define("categorie-site", Categories);
window.customElements.define("product-site", Product);
// finish counfig components

// script
const $ = document;

const openNavMenu = $.getElementById("openNavMenu");
const closeNavMenu = $.getElementById("closeNavMenu");
const navMenuMobile = $.querySelector(".nav-mobile");
const featuresSiteBtn = $.querySelectorAll(".featuresSiteBtn");
const dropdownBtns = document.querySelectorAll(".dropdownBtn");

// loops
featuresSiteBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btnElement = e.target.closest(".featuresSiteBtn");

    $.querySelector(`.${btnElement.dataset.dropdown}`).classList.toggle(
      "active",
    );
  });
});

dropdownBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.target;
    const dropdown = document.getElementById(targetId);
    const navArrowIcon = btn.querySelector("svg");

    navArrowIcon.classList.toggle("active");

    dropdown.classList.toggle("grid-rows-[0fr]");
    dropdown.classList.toggle("grid-rows-[1fr]");

    dropdown.classList.toggle("opacity-0");
    dropdown.classList.toggle("opacity-100");
  });
});

// events
openNavMenu.addEventListener("click", () => {
  navMenuMobile.classList.toggle("active");
});
closeNavMenu.addEventListener("click", () => {
  navMenuMobile.classList.remove("active");
  $.querySelectorAll(".dropdown-close.active").forEach((dropDown) =>
    dropDown.classList.remove("active"),
  );
});
