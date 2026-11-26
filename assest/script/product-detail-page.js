// all products
import { products } from "../data/products/product.js";
// calc discount product
import { Logo } from "../components/logo/logo.js";
import { NavItem } from "../components/nav-item/nav-item.js";
import { Product } from "../components/product/product.js";

window.customElements.define("site-logo", Logo);
window.customElements.define("nav-item", NavItem);
window.customElements.define("product-site", Product);

const $ = document;

// aside menu
const openNavMenu = $.getElementById("openNavMenu");
const closeNavMenu = $.getElementById("closeNavMenu");
const navMenuMobile = $.querySelector(".nav-mobile");
const featuresSiteBtn = $.querySelectorAll(".featuresSiteBtn");
const dropdownBtns = document.querySelectorAll(".dropdownBtn");

// products infos elem
const breadCrumbProductName = $.querySelector(".breadCrumbProductName");
const productMainImg = $.querySelector(".productMainImg");
const productThumbs = $.querySelectorAll(".productThumb");
const productTitle = $.querySelector(".productName");
const productStock = $.querySelector(".productStock");
const productReview = $.querySelector(".productReview");
const productSku = $.querySelector(".productSku");
const discountProductPrice = $.querySelector(".discountProductPrice");
const productPrice = $.querySelector(".productPrice");
const productDiscountPercent = $.querySelector(".productDiscountPercent");
const brandImg = $.querySelector(".brandImg");
const productShortDescription = $.querySelector(".productShortDescription");
const productCategory = $.querySelector(".productCategory");
const productTagsContainer = $.querySelector(".productTagsContainer");
const productDecription = $.querySelector(".productDecription");
const productBenefits = $.querySelector(".productBenefits");
const productStimulatingText = $.querySelector(".productStimulatingText");
const relatedProductContainer = $.querySelector(".relatedProductContainer");

{
  let pharams = new URLSearchParams(window.location.search);
  const productId = Number(pharams.get("product-id"));

  if (productId) {
    let productObj = products.find((product) => {
      return product.id === productId;
    });
    document.title = `Ecobazar | ${productObj.name}`;

    breadCrumbProductName.textContent = productObj.name;

    productMainImg.src = productObj.image;
    productThumbs.forEach((thumb) => {
      thumb.src = productObj.gallery[thumb.dataset.index];
    });

    productTitle.textContent = productObj.name;
    if (productObj.inStock) {
      productStock.className = "productStock hasProduct";
      productStock.textContent = "In Stock";
    } else {
      productStock.className = "productStock productNotFind";
      productStock.textContent = "Finished";
    }
    productReview.textContent = `${productObj.reviewCount} Review`;
    productSku.textContent = productObj.sku;

    discountProductPrice.textContent = productObj.oldPrice
      ? `$${productObj.oldPrice}`
      : "";
    productPrice.textContent = "$" + productObj.price;

    productObj.oldPrice
      ? (productDiscountPercent.textContent = `${discountPercentCalc(productObj)}% Off`)
      : (productDiscountPercent.style.display = "none");

    brandImg.src = productObj.brandLogo;
    brandImg.alt = productObj.brand;
    productShortDescription.textContent = productObj.shortDescription;
    productCategory.textContent = productObj.category;

    productObj.tags.forEach((tag) => {
      productTagsContainer.innerHTML += `
        <span>${tag}</span>
      `;
    });
    productDecription.textContent = productObj.description;
    productObj.features.forEach((benefit) => {
      productBenefits.innerHTML += `
        <li class="flex items-center gap-2">
                <div
                  class="flex items-center justify-center w-5 h-5 rounded-full text-white bg-primary"
                >
                  <svg class="w-2.5 h-2.5"><use href="#tik"></use></svg>
                </div>
                <span class="text-sm text-gray-5 leading-[140%]"
                  >${benefit}</span
                >
              </li>
      `;
    });
    productStimulatingText.textContent = productObj.shortDescription;
    let relatedProducts = [];
    productObj.relatedIds.forEach((relatedProduct) => {
      let productAd = products.find((product) => {
        return product.id === relatedProduct;
      });
      relatedProducts.push(productAd);
    });

    relatedProducts.forEach((product) => {
      relatedProductContainer.innerHTML += `
          <product-site
              data-productId="${product.id}"
              product-title="${product.name}"
              original-price="$${product.price}"
              ${product.oldPrice ? "prev-price=" + "$" + product.oldPrice : ""}
              ${product.oldPrice ? `discount="Scale ${discountPercentCalc(product)}%"` : ""}
            >
              <img
                src="${product.image}"
                alt="${product.slug}"
                slot="product-image"
                style="width: 100%; height: 100%; object-fit: cover"
              />
              <svg class="w-2.5 h-2.5 text-warning" slot="star">
                <use href="#star"></use>
              </svg>
              <svg class="w-2.5 h-2.5 text-warning" slot="star">
                <use href="#star"></use>
              </svg>
              <svg class="w-2.5 h-2.5 text-warning" slot="star">
                <use href="#star"></use>
              </svg>
              <svg class="w-2.5 h-2.5 text-warning" slot="star">
                <use href="#star"></use>
              </svg>
              <svg class="w-2.5 h-2.5 text-gray-2" slot="star">
                <use href="#star"></use>
              </svg>
            </product-site>
        `;
    });
  } else {
    location.href = "http://127.0.0.1:5500/public/index.html  ";
  }
}

// start function
function discountPercentCalc(product) {
  if (product.oldPrice) {
    return Math.round(
      ((Number(product.oldPrice) - Number(product.price)) /
        Number(product.oldPrice)) *
        100,
    );
  } else {
    return null;
  }
}
// finish function

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
