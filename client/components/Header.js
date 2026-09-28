export const createHeader = () => {
	const header = document.createElement("header");

	header.className = "site-header";

	header.innerHTML = `
    <div class="site-header__container">
      <a href="/asip-dev-practice/client" class="site-header__logo">
        Furni<span class="header-logo-dot">.</span>
      </a>

      <nav class="site-header__nav" aria-label="Main navigation">
      <div class="header-action-fields">
        <input class="search-field" id="search" type="text" placeholder="Search for items" />
        <div class="header-icons">
        <img src="/asip-dev-practice/client/images/notification-icon.svg" alt="notification-icon" />
        <img src="/asip-dev-practice/client/images/cart-icon.svg" />
        </div>
      </div>
      </nav>
    </div>
  `;

	return header;
};
