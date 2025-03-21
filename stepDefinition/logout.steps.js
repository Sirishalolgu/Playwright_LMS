import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd();
const LoginPage = require("../pageObject/LoginPage");
const LogoutPage = require("../pageObject/LogoutPage");

// Read JSON file and parse it
const { readJsonFile } = require("../utility/fileUtils");
const config = readJsonFile("../utility/config.json");
const constants = readJsonFile("../utility/constants.json");

// let page;
// let logoutPage;
const baseUrl = config.baseUrl;

Given("Admin is logged into the application", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto(baseUrl + constants.routes.login);
  await loginPage.enterUsername(config.validUser.username);
  await loginPage.enterPassword(config.validUser.password);
  await loginPage.clickLogin();
  await expect(page).toHaveURL(baseUrl + constants.routes.login);
});

Given("Admin is logged out of the application", async ({ page }) => {
  const logoutPage = new LogoutPage(page);
  await logoutPage.clickLogout();
  await expect(page).toHaveURL(baseUrl);
});

When("Admin clicks on the logout in the menu bar", async ({ page }) => {
  const logoutPage = new LogoutPage(page);
  //   await logoutPage.clickLogout();
  await logoutPage.clickLogout();
});

When("Admin clicks browser back button", async ({ page }) => {
  await page.goBack();
});

Then(
  "Admin should receive error message {string}",
  async ({ page }, message) => {
    const errorMessage = await page.locator('[role="alert"]').textContent();
    expect(errorMessage.trim()).toBe(message);
  }
);
