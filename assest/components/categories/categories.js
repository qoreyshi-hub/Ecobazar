const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="assest/components/categories/categories.css" />
<div>
  <div class="categories__wrapper " >
    <slot name="categorie-img" class="categorie-img"></slot>
    <h6>Fresh Fruit</h6>
</div>
</div>

`;

class Categories extends HTMLElement {
  static observedAttributes = ["title", "width"];
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.shadowRoot.querySelector(".categories__wrapper").style.width =
      this.getAttribute("width");

    this.shadowRoot.querySelector(".categories__wrapper h6").textContent =
      this.getAttribute("title");
  }
}

export { Categories };
