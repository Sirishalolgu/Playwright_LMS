const { BasePage } = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    // this.computer = this.page.hover('ul.top-menu > li > a[href="/computers"]');
    // this.computer = page.locator('role=link[name="Computers"]');
    // this.desktop = page.getByRole('link', { name: 'Desktops' });
    // this.accountMenu = page.getByRole('button', { name: ' My account' });
    // this.loginLink = page.getByRole('link', { name: 'Login' });
    // this.searchBox = 'input[name="search"]';
    // this.searchButton = 'button[type="submit"]';
  }

  async goToLoginPage() {
    await this.accountMenu.click();
    await this.loginLink.click();
  }

  async searchProduct(productName) {
    await this.page.fill(this.searchBox, productName);
    await this.page.click(this.searchButton);
  }

  async selectProduct(productName){
    const link = await this.page.getByRole('link', { name: 'Computers' }).first();
    await link.hover();
    // await this.computer;
    // await this.page.hover('ul.top-menu > li > a[href="/computers"]'); // ✅ Now this will work!

    // await this.page.hover('ul.top-menu > li > a[href="/computers"]');
    await this.page.click(`ul.top-menu li a:has-text("${productName}")`);

   
  }
}

module.exports = { HomePage };