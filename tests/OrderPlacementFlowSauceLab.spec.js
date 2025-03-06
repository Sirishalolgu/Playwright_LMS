const { test, expect } = require('@playwright/test');
// const { LoginSauceLabPage } = require('../pages/LoginSauceLabPage');
const { setup, teardown  } = require('./hooksExample.js'); // ✅ Import loginPage from hooks
// const { InventoryPage } = require('../pages/InventoryPage');

let loginPage, page;

test.beforeAll(async () => {
    const setupData = await setup(); // ✅ Call setup()
    loginPage = setupData.loginPage;
    page = setupData.page;
});

test.afterAll(async () => {
    await teardown(); // ✅ Clean up after tests
});

test.describe('Login Tests', () => {

test('Sauce Login', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveTitle(/Swag Labs/); // ✅ Validate successful login
});

test('Invalid Login', async ({ page }) => {
    await loginPage.login('invalid_user', 'wrong_password');
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Epic sadface');
});

});
