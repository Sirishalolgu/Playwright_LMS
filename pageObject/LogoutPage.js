class LogoutPage {
  constructor(page) {
    this.page = page;
    this.logoutButton = page.locator('//button[@id="logout"]');
  }
  async clickLogout() {
    await this.logoutButton.click();
  }
  
}

module.exports = LogoutPage;
