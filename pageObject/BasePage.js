class BasePage {
    // constructor(page) {
    //   this.page = page;
    // }

    constructor(page) {
      if (!page) {
          throw new Error("Page instance is required for BasePage.");
      }
      this.page = page; // ✅ Set page correctly
  }

  async navigate(url) {
      await this.page.goto(url); // ✅ Now it works!
  }

  }
  
  module.exports = { BasePage };