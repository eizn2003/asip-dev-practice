import { createFooter } from "./components/Footer.js";
import { createHeader } from "./components/Header.js";
import { createShop } from "./components/Shop.js";

document.addEventListener("DOMContentLoaded", async () => {	
	const header = document.querySelector("header");
	const main = document.querySelector("main");
    const footer = document.querySelector("footer");

	header.replaceWith(createHeader());
	const searchField = document.querySelector("#search");
	main.append(await createShop(searchField));
    footer.replaceWith(createFooter())	
});

