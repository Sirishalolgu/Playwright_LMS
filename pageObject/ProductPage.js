const { BasePage } = require('./BasePage');

class ProductPage extends BasePage {
  constructor(page) {
    super(page);
    this.addToCartButton = page.getByRole('link', { name: 'iPod Nano', exact: true }).first();
    this.cartIcon = page.getByRole('button', { name: 'Add to Cart' });
  }

  async addProductToCart() {
    await this.addToCartButton.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}

module.exports = { ProductPage };
