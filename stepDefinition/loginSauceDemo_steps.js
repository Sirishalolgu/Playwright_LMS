import { createBdd } from 'playwright-bdd';
import { LoginSauceLabPage } from '../pages/LoginSauceLabPage';
import { BasePage } from '../pages/BasePage';


const { Given, When, Then } = createBdd();
// const locators = require("../locators");


Given('I am on the login page', async ({page}) => {
    const basePage = new BasePage(page);
    await basePage.navigate('https://www.saucedemo.com');
  });
  
  When('I enter username {string} and password {string}', async ({page}, username, password) => {
    const loginPage = new LoginSauceLabPage(page);
    await loginPage.login(username, password);
  });
  
  Then('I should be logged in successfully', async ({page}) => {
    const loginPage = new LoginSauceLabPage(page);
    await loginPage.verifyLoginSuccess();
  });
  
  Then('I should see a login error', async ({page}) => {
    const loginPage = new LoginSauceLabPage(page);
    // await loginPage.getErrorMessage();
    const expectedMessage = "Epic sadface: Username and password do not match any user in this service";
    const isErrorDisplayed = await loginPage.validateErrorMessage(expectedMessage);
    if (!isErrorDisplayed) {
        throw new Error("Error message did not match the expected value.");
    }
  });