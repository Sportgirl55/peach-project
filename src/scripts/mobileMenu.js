class MobileMenu {
  constructor() {
    this.citySubmenu = document.querySelector(".submenu");
    this.initialize();
  }

  initialize() {
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;

    if (isTouchDevice) {
      this.citySubmenu.addEventListener(
        "click",
        this.handleSubmenuClick.bind(this)
      );
    }
  }

  handleSubmenuClick(e) {
    e.stopPropagation();
    const submenuItem = e.target.closest("[data-area]");
    const dropdownContent = submenuItem.querySelector("[data-parent-area]");
    if (!dropdownContent) return;

    this.toggleDropdownContent(submenuItem, dropdownContent);
  }

  toggleDropdownContent(submenuItem, dropdownContent) {
    this.citySubmenu.querySelectorAll("[data-parent-area]").forEach((item) => {
      item.style.display = "none";
    });

    this.citySubmenu.querySelectorAll("[data-area]").forEach((item) => {
      item
        .querySelector(".submenu__item-name")
        .classList.remove("mobile_active");
    });

    submenuItem
      .querySelector(".submenu__item-name")
      .classList.add("mobile_active");

    dropdownContent.style.display =
      dropdownContent.style.display === "flex" ? "none" : "flex";
  }
}

const mobileMenu = new MobileMenu();

export default mobileMenu;
