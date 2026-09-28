export const createFooter = () => {
	const footer = document.createElement("footer");
	footer.className = "site-footer";
	const year = new Date().getFullYear();
	footer.innerHTML = ` <p> &copy; ${year} Furni. All rights reserved. </p> `;
	return footer;
};
