const{Given, When, Then} = require('@cucumber/cucumber');
const { POManager } = require('../../pageObject/POManager');

let poManager;

Given('the url of the application',  {timeout: 100*1000},async function() {      
    poManager = new POManager(this.page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goto();
    await this.page.waitForTimeout(1000);
    console.log(await this.page.title());
  });

  When('the url is clicked', function () {
    console.log("when");

  });

  Then('the browser opens', function () {
    console.log("then");

  });

 