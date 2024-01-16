class ResponsiveHelper {
  constructor() {
    this.buttonText = document.querySelector(".hero .button__text");
    this.updateButtonText();
    window.addEventListener("resize", () => this.updateButtonText());
  }

  updateButtonText() {
    this.buttonText.innerHTML =
      window.innerWidth < 480 ? "Наш сайт" : "На сайт";
  }
}

const responsiveHelper = new ResponsiveHelper();

export default responsiveHelper;
