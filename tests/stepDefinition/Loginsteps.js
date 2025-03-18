import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const{Given, When, Then} = createBdd();
const { POManager } = require('../pageObject/POManager');
let poManager;

Given('Admin is on dashboard page after Login', {timeout: 10*1000},async ({page}) => {
  poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goto();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(200);
    console.log(await page.title());
    //await expect(loginPage.password.toBeVisible());
    await expect(loginPage.password).toBeVisible();
    await page.waitForTimeout(200);
    await loginPage.loginWithValidCredentials();
});

When('the url is clicked', async ({}) => {
  console.log("when");
});

Then('the browser opens', async ({}) => {
  console.log("then");
});

  

 