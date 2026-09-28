export const createCard = (item) => {
	const card = document.createElement("article");

	card.className = "furniture-card";

	card.innerHTML = `
    <img
      src="${item.image}"
      alt="${item.name}"
      class="furniture-card__image"
    >

    <div class="furniture-card__content">
      <span class="furniture-card__category">
        ${item.category}
      </span>

      <h2 class="furniture-card__name">
        ${item.name}
      </h2>

      <p class="furniture-card__price">
        $${item.price}
      </p>
    </div>
  `;

	return card;
};
