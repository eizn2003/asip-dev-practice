import { getFurniture } from "../api/API.js";
import { createCard } from "./Card.js";

export const createShop = async (searchField) => {
	const furniture = await getFurniture();

	const shop = document.createElement("section");
	shop.className = "furniture-grid";

	const renderItems = (items) => {
		shop.innerHTML = items.map((item) => createCard(item).outerHTML).join("");
	};

	renderItems(furniture);

	searchField.addEventListener("input", () => {
		const filteredItems = furniture.filter((item) =>
			item.name.toLowerCase().includes(searchField.value.toLowerCase()),
		);

		renderItems(filteredItems);
	});

	return shop;
};