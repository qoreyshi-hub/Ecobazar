const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="assest/components/feature/feature.css" />
    <div class="feature__wrapper">
        <slot name="icon"></slot>
        <div>
            <h6></h6>
            <p></p>
        </div>
    </div>
`;
class FeatureSite extends HTMLElement {
  static observedAttributes = ["title", "description"];
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.shadowRoot.querySelector(".feature__wrapper div h6").textContent =
      this.getAttribute("title");

    this.shadowRoot.querySelector(".feature__wrapper div p").textContent =
      this.getAttribute("description");
  }
}
export { FeatureSite };
