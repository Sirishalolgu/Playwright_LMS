const{Given, When, Then} = require('@cucumber/cucumber');
const { POManager } = require('../../pageObject/POManager');
const { expect } = require('@playwright/test');

let poManager;

Given('Admin is on dashboard page after Login',  {timeout: 200*1000},async function() {  
  if(!this.page){
    throw new Error("Page not initialized");
  }    
    poManager = new POManager(this.page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goto();
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(20000);
    console.log(await this.page.title());
    //await expect(loginPage.password.toBeVisible());
    await expect(loginPage.password).toBeVisible();
    await this.page.waitForTimeout(20000);
    await loginPage.loginWithValidCredentials();

  });

  When('the url is clicked', async function () {
    console.log("when");
  });

  Then('the browser opens', function () {
    console.log("then");

  });

 