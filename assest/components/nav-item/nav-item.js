const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="assest/components/nav-item/nav-item.css" />

    <li class="nav-item__wrapper">
        <div >
            <span></span>
            <svg class="arrow-down" viewBox="0 0 8 5" fill="none">
                <path
                d="M7.5 0.5L4 4L0.5 0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#666666"
                />
        </svg>
        </div>
    </li>
`;

class NavItem extends HTMLElement {
  static observedAttributes() {
    return ["content"];
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.shadowRoot.querySelector(".nav-item__wrapper div span").textContent =
      this.getAttribute("content");
  }
}

export { NavItem };
