const { BasePage } = require('./BasePage.js');
const loginLocators = require('../locators.js');
import { expect } from '@playwright/test';  // ✅ Import expect
// import { locators } from '../locators.js';


class LoginSauceLabPage extends BasePage {
  constructor(page) {
    super(page);
    // this.emailInput = '[data-test="username"]';
    // this.passwordInput = '[data-test="password"]';
    // this.loginButton = '[data-test="login-button"]';
    // this.errorMessage = '.alert-danger';
  }

  async login(username, password) {
    await this.page.locator(loginLocators.getLocator("LoginSauceLabPage","username")).fill(username);
    await this.page.locator(loginLocators.getLocator("LoginSauceLabPage","password",)).fill(password);
    await this.page.locator(loginLocators.getLocator("LoginSauceLabPage","loginButton")).click();
  }

  async verifyLoginSuccess() {
    await expect(this.page).toHaveURL(/inventory.html/);
  }

  async getErrorMessage() {
    return this.page.locator(loginLocators.getLocator("LoginSauceLabPage","errorMessage")).textContent();
  }

  async validateErrorMessage(expectedMessage) {
    const actualMessage = await this.getErrorMessage();
    return actualMessage === expectedMessage;
}

}

module.exports = { LoginSauceLabPage };