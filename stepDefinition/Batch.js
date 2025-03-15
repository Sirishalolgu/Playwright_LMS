import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd();
// import { test, expect } from '@playwright/test';

const{test, expect, playwright} = require('@playwright/test');
const {BatchPO}= require ('../pageObject/BatchPO');


test.beforeEach(async ({ page }) => {
  this.batchPO = new BatchPO(page);
  await batchPO.goto();
  await batchPO.fillCredentials(); 
});

Given('Admin is on the home Page', async ({}) => {
    
   // await this.batchPO.goto();
   // this.batchPO.fillCredentials();
  });
  
  When('Admin clicks on the {string} menu from the header', async (menuName) => {
    await this.batchPO.clickMenu(string);
  });
  
  Then('Admin should be in the Manage {string} Page', async (pageName) => {
    await this.batchPO.verifyBatchPage(pageName);

  });

