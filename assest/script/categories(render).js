import { categories } from "../data/categories.js";
const categoriesContainer = document.querySelector(".categories__container");

categories.forEach((categorie) => {
  categoriesContainer.innerHTML += `
        <categorie-site title="${categorie.title}" width="100%">
              <img
                src="${categorie.img}"
                alt="${categorie.alt}"
                slot="categorie-img"
                loading="lazy"
              />
        </categorie-site>
    `;
});
