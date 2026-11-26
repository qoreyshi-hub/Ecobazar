import { products } from "../data/products/product.js";

const $ = document;
const popularProductContainer = $.querySelector(".popular-product__container");
const featureProductContainer = $.querySelector(".feature-product__container");
const hotDealsProductContainer = $.querySelector(
  ".hot-deals-product__container",
);
let featuredProducts = [];
products.forEach((product) => {
  // Start Popular Product Counfig

  if (product.isPopular) {
    popularProductContainer.innerHTML += `
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
  }
  // Finish Popular Product Counfig

  // Start Hot Deals Product Counfig

  hotDealsProductContainer.innerHTML += `
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

  // Finish Hot Deals Product Counfig
  // Pushing Featured Product

  if (product.isFeatured) {
    featuredProducts.push(product);
  }
});

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

function counfigFeaturedProduct() {
  let featuredProductSplice = featuredProducts.slice(0, 5);
  featuredProductSplice.forEach((product) => {
    featureProductContainer.innerHTML += `
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
}
counfigFeaturedProduct();
