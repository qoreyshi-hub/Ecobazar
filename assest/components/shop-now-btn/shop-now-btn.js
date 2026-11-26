const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="assest/components/shop-now-btn/shop-now-btn.css" />
            <a href="#" class="showNowBtnWrapper">
              <span></span>
              <svg
                viewBox="0 0 17 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M15.75 6.77502H0.75"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="currentColor"
                />
                <path
                d="M9.70001 0.75L15.75 6.774L9.70001 12.799"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="currentColor"
                />
              </svg>
            </a>

`;
class ShopNowBtn extends HTMLElement {
  static observedAttributes = ["background", "color", "content", "width"];
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    const shopNowBtnElement =
      this.shadowRoot.querySelector(".showNowBtnWrapper");

    shopNowBtnElement.style.backgroundColor =
      this.getAttribute("background") || "none";

    shopNowBtnElement.style.color = this.getAttribute("color") || "none";

    shopNowBtnElement.querySelector("span").textContent =
      this.getAttribute("content");
  }
}

export { ShopNowBtn };
