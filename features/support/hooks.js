const playwright = require('@playwright/test');
const { expect } = require('@playwright/test');
const { Before, After} = require('@cucumber/cucumber');

Before({timeout:25*1000}, async function() {
    const browser = await playwright.chromium.launch({headless:false});
   // await this.page.waitForTimeout(2000);
    const context = await browser.newContext();
    this.page = await context.newPage();
    console.log("this page is new page =" + this.page);   
})

After( function(){
    
})