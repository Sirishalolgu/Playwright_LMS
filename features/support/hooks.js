const playwright = require('@playwright/test');
const { Before, After} = require('@cucumber/cucumber');

Before(async function() {
    const browser = await playwright.chromium.launch({headless:false});
    const context = await browser.newContext();
    this.page = await context.newPage();
    console.log("this page is new page =" + this.page);   
})