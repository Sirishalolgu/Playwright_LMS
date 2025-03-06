const { BasePage } = require('./BasePage');

class InventoryPage extends BasePage {
  constructor(page) {
    super(page);
    this.inventoryContainer = '.inventory_container';
  }

  async isLoaded() {
    return this.page.waitForURL('/inventory/');
    // return this.page.waitForSelector(this.inventoryContainer);
  }
}

module.exports = { InventoryPage };