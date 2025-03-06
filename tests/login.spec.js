const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { LoginPage } = require('../pages/LoginPage');

test('Login with invalid credentials', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  await homePage.navigate('/');
  await homePage.goToLoginPage();
  await loginPage.login('invalid@example.com', 'wrongpassword');
  
  expect(await loginPage.getErrorMessage()).toContain('Warning: No match for E-Mail Address and/or Password.');
});