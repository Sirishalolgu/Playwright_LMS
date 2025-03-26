import { logMessage } from "../utility/logger.js";
import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";

const { readJsonFile } = require("../utility/fileUtils.js");
const config = readJsonFile("../utility/config.json");
const constants = readJsonFile("../utility/constants.json");
const LoginPage = require("../pageObject/LoginPage");
const { Given, When, Then } = createBdd();
const baseUrl = config.baseUrl;
const POManager = require("../pageObject/POManager");
let poManager;

// ========================== Given Steps ==========================
Given("Admin gives the correct LMS portal URL", async ({ page }) => {
  logMessage("Step: Admin gives the correct LMS portal URL");
  await page.goto(baseUrl + constants.routes.login);
});

Given(
  "Admin is on dashboard page after Login",
  { timeout: 10 * 1000 },
  async ({ page }) => {
    poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goto();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(200);
    console.log(await page.title());
    //await expect(loginPage.password.toBeVisible());
    await expect(loginPage.password).toBeVisible();
    await page.waitForTimeout(200);
    await loginPage.loginWithValidCredentials();
  }
);

Given("Admin gives the invalid LMS portal URL", async ({ page }) => {
  logMessage("Step: Admin gives the invalid LMS portal URL");
  const loginPage = new LoginPage(page);
  const response = await loginPage.visitInvalidUrl(
    baseUrl + constants.routes.invalid,
    page
  );

  expect(response.status()).toBeLessThan(400);
});

// ========================== Then Steps ==========================
Then("Admin should land on the login page", async ({ page }) => {
  logMessage("Step: Admin should land on the login page");
  await expect(page).toHaveTitle(constants.text.loginPage);
});

Then("Admin should be redirected to the login page", async ({ page }) => {
  logMessage("Step: Admin should be redirected to the login page");
  await expect(page).toHaveTitle(constants.text.loginPage);
});

Then("HTTP response >= 400. Then the link is broken", async ({ page }) => {
  logMessage("Step: Checking broken link");
  const loginPage = new LoginPage(page);
  const { isBroken, status } = await loginPage.isBrokenLink(
    config.brokenLinkUrl
  );
  console.log(`Checked link: Status ${status}`);
  expect(isBroken).toBe(true);
});

Then("Admin should see correct spellings in all fields", async ({ page }) => {
  logMessage("Step: Admin should see correct spellings in all fields");
  const loginPage = new LoginPage(page);
  const userFieldName = await loginPage.getUserFieldLabel();
  expect(userFieldName).toBe(constants.labels.username);
  const passwordFieldName = await loginPage.getPasswordFieldLabel();
  expect(passwordFieldName).toBe(constants.labels.password);
});

Then("Admin should see LMS - Learning Management System", async ({ page }) => {
  logMessage("Step: Admin should see LMS - Learning Management System");
  const loginPage = new LoginPage(page);
  const appName = await loginPage.getApplicationName();
  expect(appName).toContain(constants.text.appName);
});

Then("Admin should see company name below the app name", async ({ page }) => {
  logMessage("Step: Admin should see company name below the app name");
  const loginPage = new LoginPage(page);
  const compName = await loginPage.getApplicationName();
  expect(compName).toContain(constants.text.companyName);
});

Then("Admin should see the {string}", async ({ page }, expectedText) => {
  logMessage(`Step: Admin should see the text "${expectedText}"`);
  const loginPage = new LoginPage(page);
  const actualText = await loginPage.getSignInContent();
  expect(actualText.trim()).toBe(expectedText);
});

Then("Admin should see two text field", async ({ page }) => {
  logMessage("Step: Admin should see two text fields");
  const loginPage = new LoginPage(page);
  const textField = await loginPage.countTextFields();
  expect(textField).toBe(2);
});

Then(
  "Admin should see {string} in the first text field",
  async ({ page }, expectedText) => {
    logMessage(
      `Step: Admin should see "${expectedText}" in the first text field`
    );
    const loginPage = new LoginPage(page);
    const userFieldLabel = await loginPage.getUserFieldLabel();
    expect(userFieldLabel).toBe(expectedText);
  }
);

Then(
  "Admin should see asterisk mark symbol next to {string} text field",
  async ({ page }, fieldName) => {
    logMessage(
      `Step: Admin should see asterisk next to "${fieldName}" text field`
    );
    const loginPage = new LoginPage(page);
    const asterikLocator = await loginPage.verifyAsteriskForField(fieldName);
    await expect(asterikLocator).toBeVisible();
  }
);

Then("the browser opens", function () {
  console.log("then");
});

Then(
  "Admin should see {string} in the second text field",
  async ({ page }, expectedText) => {
    logMessage(
      `Step: Admin should see "${expectedText}" in the second text field`
    );
    const loginPage = new LoginPage(page);
    const passwordFieldLabel = await loginPage.getPasswordFieldLabel();
    expect(passwordFieldLabel).toBe(expectedText);
  }
);

Then(
  "Admin should see asterisk mark symbol next to password text",
  async ({ page }) => {
    logMessage("Step: Admin should see asterisk mark next to password");
    const loginPage = new LoginPage(page);
    const asterisk = loginPage.asteriskPassword;
    await expect(asterisk).toBeVisible();
  }
);

Then(
  "Admin should see input field on the centre of the page",
  async ({ page }) => {
    logMessage("Step: Admin should see input field on center");
    const loginPage = new LoginPage(page);
    const isCentered = await loginPage.isInputFieldOnCenter();
    expect(isCentered).toBe(true);
  }
);

Then("Admin is on login Page", async ({ page }) => {
  logMessage("Step: Admin is on login Page");
  const loginPage = new LoginPage(page);
  const pageUrl = await loginPage.isLoginPage();
  expect(pageUrl).toContain(constants.routes.login);
});

Then("Admin should see login button", async ({ page }) => {
  logMessage("Step: Admin should see login button");
  const loginPage = new LoginPage(page);
  const isVisible = await loginPage.isLoginButtonVisible();
  expect(isVisible).toBe(true);
});

Then("Admin should land on home page", async ({ page }) => {
  logMessage("Step: Admin should land on home page");
  await expect(page).toHaveURL(config.baseUrl);
});

Then(
  "Admin should see {string} in gray color",
  async ({ page }, expectedText) => {
    logMessage(`Step: Admin should see "${expectedText}" in gray color`);
    const loginPage = new LoginPage(page);
    const isGray = await loginPage.isFieldDescriptiveTextGreyedOut(
      expectedText
    );
    expect(isGray).toBe(true);
  }
);

// ========================== When Steps ==========================
When(
  "Admin enter valid data in all field and clicks login button",
  async ({ page }) => {
    logMessage("Step: Admin enter valid data and clicks login");
    const loginPage = new LoginPage(page);
    await loginPage.enterUsername(config.validUser.username);
    await loginPage.enterPassword(config.validUser.password);
    await loginPage.clickLogin();
  }
);

When("the url is clicked", async function () {
  console.log("when");
});

When("Admin enter invalid data and clicks login button", async ({ page }) => {
  logMessage("Step: Admin enter invalid data and clicks login");
  const loginPage = new LoginPage(page);
  await loginPage.enterUsername(config.invalidUser.username);
  await loginPage.enterPassword(config.invalidUser.password);
  await loginPage.clickLogin();
});

When(
  "Admin enter value only in password and clicks login button",
  async ({ page }) => {
    logMessage("Step: Admin enter only password and clicks login");
    const loginPage = new LoginPage(page);
    await loginPage.clickUsername();
    await loginPage.enterPassword(config.validUser.password);
    await loginPage.clickLogin();
  }
);

Then("Error message {string}", async ({ page }, fieldName) => {
  logMessage(`Step: Checking error message "${fieldName}"`);
  const loginPage = new LoginPage(page);
  const errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage.trim()).toBe(fieldName);
});

Then("Error message should be {string}", async ({ page }, fieldName) => {
  logMessage(`Step: Checking password error message "${fieldName}"`);
  const loginPage = new LoginPage(page);
  const errorMessage = await loginPage.getPasswordErrorMessage();
  expect(errorMessage.trim()).toBe(fieldName);
});

When(
  "Admin enter value only in user name and clicks login button",
  async ({ page }) => {
    logMessage("Step: Admin enter only username and clicks login");
    const loginPage = new LoginPage(page);
    await loginPage.enterUsername(config.validUser.username);
    await loginPage.clickPassword();
    await loginPage.clickLogin();
  }
);

When(
  "Admin enter valid credentials and clicks login button through keyboard",
  async ({ page }) => {
    logMessage("Step: Admin login using keyboard");
    const loginPage = new LoginPage(page);
    await loginPage.enterUsername(config.validUser.username);
    await loginPage.enterPassword(config.validUser.password);
    await loginPage.clickLoginWithKeyboard();
  }
);

When(
  "Admin enter valid credentials and clicks login button through mouse",
  async ({ page }) => {
    logMessage("Step: Admin login using mouse");
    const loginPage = new LoginPage(page);
    await loginPage.enterUsername(config.validUser.username);
    await loginPage.enterPassword(config.validUser.password);
    await loginPage.clickLoginWithMouse();
  }
);
