// const playwright = require('@playwright/test');
// const { expect } = require('@playwright/test');
// const { Before, After} = require('@cucumber/cucumber');
import { test as base, createBdd } from 'playwright-bdd';


// export const test = base.extend({
//   context: async ({ browser }, use) => {
//     const context = await browser.newContext();
//     await use(context);
//     await context.close();
//   },
//   page: async ({ context }, use) => {
//     const page = await context.newPage();
//     await use(page);
//     await page.close();
//   },
// });


const { Before, BeforeAll } = createBdd();

BeforeAll({timeout:25*1000}, async()=> {
    
   // await this.page.waitForTimeout(2000);
   //this.page ;
   console.log("New page created in Before hook:"); 
})

