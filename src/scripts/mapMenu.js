class MapMenu {
  constructor(selector) {
    this.mapMenu = document.querySelector(selector);
    this.mapOffices = document.querySelector(".offices__map");
    this.dropdownArrow = document.querySelector(".offices__dropdown-arrow");
    this.offices = document.querySelector(".offices");
    this.submenu = document.querySelector(".offices__dropdown-menu");
    this.dropdownBtn = document.querySelector(".offices__inner");

    this.mapMenu.addEventListener("click", this.handleMapMenuClick.bind(this));
    this.dropdownBtn.addEventListener(
      "mouseenter",
      this.handleDropdownHover.bind(this)
    );
    [this.submenu, this.mapOffices].forEach((item) => {
      item.addEventListener("click", this.closeMenu.bind(this));
    });
  }

  handleMapMenuClick(e) {
    const officeId = e.target.dataset.officeId;
    if (!officeId) return;
    this.updateImage(officeId);
    this.mapMenu
      .querySelectorAll("li")
      .forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
  }

  handleDropdownHover() {
    if (this.submenu.classList.contains("show")) return;

    const openSubmenu = document.querySelector(
      '[data-parent-area][style*="display: flex"]'
    );
    if (openSubmenu) {
      openSubmenu.style.display = "none";
      const activeItem = document.querySelector(
        ".submenu__item-name.mobile_active"
      );
      if (activeItem) {
        activeItem.classList.remove("mobile_active");
      }
    }

    this.mapMenu.style.opacity = 0.3;
    this.mapOffices.style.opacity = 0.3;
    this.togglePointerEvents("none");

    this.submenu.classList.toggle("show");
    this.dropdownArrow.style.transform = "rotateX(180deg)";
  }

  closeMenu() {
    this.mapMenu.style.opacity = 1;
    this.mapOffices.style.opacity = 1;
    this.submenu.classList.remove("show");
    this.dropdownArrow.style.transform = "rotateX(360deg)";
    this.togglePointerEvents("auto");
  }

  updateImage(id) {
    document.querySelector(".offices__image").src = `${
      import.meta.env.BASE_URL
    }images/maps/${id}.png`;
  }

  togglePointerEvents(value) {
    this.mapMenu.querySelectorAll("[data-office-id]").forEach((item) => {
      item.style.pointerEvents = value;
    });
  }
}

const mapMenu = new MapMenu(".offices__menu");

export default mapMenu;
