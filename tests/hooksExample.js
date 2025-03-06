const { test } = require('@playwright/test');
const { chromium } = require('@playwright/test'); // ✅ Import chromium

const { LoginSauceLabPage } = require('../pages/LoginSauceLabPage');
let browser, context, page, loginPage; // ✅ Declare globally so teardown can access them

// test.beforeEach(async ({ browser }) => {

//     const context = await browser.newContext(); // Create a new context
//     page = await context.newPage(); // Open a fresh page within the same browser
//     loginPage = new LoginSauceLabPage(page);
//     await page.goto('https://www.saucedemo.com/');
//   });
  
//   test.afterEach(async () => {
//     console.log('✅ Test completed. Performing cleanup...');
//     await page.close();
//     await context.close(); // ✅ Close context after test

//   });

// test.afterAll(async ({ browser }) => {
//     console.log('✅ All Tests Completed. Closing Browser...');
//     await browser.close();
// });

module.exports = {
  setup: async () => {
      browser = await chromium.launch({ headless: false });
      context = await browser.newContext();
      page = await context.newPage();
      loginPage = new LoginSauceLabPage(page); // ✅ Ensure this is initialized
      await page.goto('https://www.saucedemo.com/'); // ✅ Navigate once

      return { browser, context, page, loginPage }; // ✅ Return all initialized objects
  },

  teardown: async () => {
    if (page) {
      console.log('✅ Test completed. Performing cleanup...');
      await page.close();
  }
  if (context) {
      await context.close();
  }
  if (browser) {
      await browser.close();
  }
}
};