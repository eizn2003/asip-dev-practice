import { getFurniture } from "../api/API.js";
import { createCard } from "./Card.js";
export const createShop = async () => {
	const furniture = await getFurniture();
	const shop = document.createElement("section");
	shop.className = "furniture-grid";
	shop.innerHTML = furniture.map((item) => createCard(item).outerHTML).join("");
	return shop;
};
