import { createBdd } from 'playwright-bdd';
const{Given, When, Then} = createBdd();
const { POManager } = require('../pageObject/POManager');
const { ClassPage } = require('../pageObject/ClassPage');
const { expect } = require('playwright/test');



let poManager;
let classpage;



When('Admin enters mandatory fields in the form and clicks on save button', {timeout: 10*1000},async ({page}) => {
     poManager = new POManager(page);
     classpage= new ClassPage(page);
     await classpage.AddNewclass_WithMandetoryFields();
});

Then('Admin gets message Class added Successfully', {timeout: 10*1000},async ({page}) => {
    poManager = new POManager(page);
    classpage= new ClassPage(page);
  await classpage.addNewclass_successMessage('Successful');
});