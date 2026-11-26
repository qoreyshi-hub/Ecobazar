const template = document.createElement("template");
template.innerHTML = `
            <link rel="stylesheet" href="assest/components/product/product.css" />
            <div class="product__wrapper">
              <div class="product__image">
                <slot name="product-image" class="product-image"></slot>
                <!-- if this property has attribute discount then a span tag add in here -->
                <div class="product__info">
                  <button id="favouriteBtn">
                    <svg
                      viewBox="0 0 30 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.587 24.5498C-12.0791 9.81093 6.58751 -6.18907 14.587 3.92834C22.5875 -6.18907 41.2542 9.81093 14.587 24.5498Z"
                        stroke-width="1.5"
                        stroke="currentColor"
                      />
                    </svg>
                  </button>
                  <a href="#" id="productPageDetailBtn">
                  <button id="productViewBtn">
                    <svg
                      viewBox="0 0 19 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 0.75C3.25 0.75 0.75 7.20905 0.75 7.20905C0.75 7.20905 3.25 13.6667 9.5 13.6667C15.75 13.6667 18.25 7.20905 18.25 7.20905C18.25 7.20905 15.75 0.75 9.5 0.75V0.75Z"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke="currentColor"
                      />
                      <path
                        d="M9.5 10.334C10.3288 10.334 11.1237 10.0047 11.7097 9.41869C12.2958 8.83264 12.625 8.03779 12.625 7.20898C12.625 6.38018 12.2958 5.58533 11.7097 4.99928C11.1237 4.41322 10.3288 4.08398 9.5 4.08398C8.6712 4.08398 7.87634 4.41322 7.29029 4.99928C6.70424 5.58533 6.375 6.38018 6.375 7.20898C6.375 8.03779 6.70424 8.83264 7.29029 9.41869C7.87634 10.0047 8.6712 10.334 9.5 10.334V10.334Z"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke="currentColor"
                      />
                    </svg>
                  </button></a>
                </div>
              </div>
              <div class="product__content">
                <div>
                  <span class="product__title"></span>
                  <div class="product__price">
                    <span class="product__price-original"></span>
                  </div>
                  <div class="product__rating">
                    <slot name="star"></slot>
                  </div>
                </div>
                <a href="#" class="product__buy-icon">
                  <svg
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.81669 6.48336H2.31669L0.650024 15.65H15.65L13.9834 6.48336H11.4834M4.81669 6.48336V3.98336C4.81669 2.14241 6.30907 0.650024 8.15002 0.650024C9.99097 0.650024 11.4834 2.14241 11.4834 3.98336V6.48336M4.81669 6.48336H11.4834M4.81669 6.48336V8.98336M11.4834 6.48336V8.98336"
                      stroke-width="1.3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
`;

class Product extends HTMLElement {
  static observedAttributes() {
    return ["discount", "product-title", "original-price", "prev-price"];
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    // counfig discount
    if (this.hasAttribute("discount")) {
      let prevElement = this.shadowRoot.querySelector(".product-image");
      let discountContent = this.getAttribute("discount");

      prevElement.insertAdjacentHTML(
        "afterend",
        `<span class="product__discount">${discountContent}</span>`,
      );
    }
    // counfig title
    this.shadowRoot.querySelector(".product__title").textContent =
      this.getAttribute("product-title");

    // original price
    this.shadowRoot.querySelector(".product__price-original").textContent =
      this.getAttribute("original-price");
    // prev price
    if (this.hasAttribute("prev-price")) {
      let priceWrapper = this.shadowRoot.querySelector(".product__price");
      let prevPriceContent = this.getAttribute("prev-price");

      priceWrapper.insertAdjacentHTML(
        "beforeend",
        `<span>${prevPriceContent}</span>`,
      );
    }
    // Favourite Btn
    const favouriteBtn = this.shadowRoot.getElementById("favouriteBtn");
    favouriteBtn.addEventListener("click", (e) => {
      console.log("Product Added To Your Favourite List.");
    });
    // Product View Btn
    const ViewBtn = this.shadowRoot.getElementById("productViewBtn");
    ViewBtn.addEventListener("click", (e) => {
      const productId = Number(this.dataset.productid);
      const productDetailPageBtn = this.shadowRoot.querySelector(
        "#productPageDetailBtn",
      );

      productDetailPageBtn.href = `product-detail.html?product-id=${productId}`;
    });
  }
}
export { Product };
