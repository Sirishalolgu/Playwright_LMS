import { createBdd } from 'playwright-bdd';
const{Given, When, Then} = createBdd();
const { POManager } = require('../pageObject/POManager');
const { ClassPage } = require('../pageObject/ClassPage');
const { expect } = require('playwright/test');


let poManager;
let classpage;

When('Admin clicks on the edit icon', {timeout: 10*1000},async ({page}) => {
         poManager = new POManager(page);
         classpage= new ClassPage(page);
         await classpage.editClassButton();
  });
  
  Then('A new pop up with class details appears', async ({page}) => {
    await expect(classpage.classDetail).toBeVisible();
  });

  Then('Admin should see batch name field is disabled', async ({page}) => {
    await expect(classpage.batchNameDropdown).toBeDisabled();
  });
  
  Then('Admin should see class topic field is disabled', async ({page}) => {
    await expect(classpage.classTopicTextbox).toBeDisabled();
  });
  When('Update the fields with valid data and click save', {timeout: 10*1000}, async ({page}) => {
         poManager = new POManager(page);
         classpage= new ClassPage(page);
         await classpage.editClassButton();
         const msg=await classpage.editStaffName();
         console.log("msg",msg)
  });
  
  Then('Admin gets message {string} and see the updated values in data table', async ({page}, arg) => {
        await expect(classpage.classupdatemsg).toHaveText('Class Updated');
  });
  
  When('Admin clicks Cancel button on edit popup', {timeout: 10*1000},async ({page}) => {
    poManager = new POManager(page);
    classpage= new ClassPage(page);
    await classpage.editClassButton();
    await classpage.editPopUP_CancelButton();
  });
  
  Then('Admin can see the class details popup disappears and can see nothing changed for particular Class', async ({}) => {
   await expect(classpage.manageClassLabel).toBeVisible();
  });
  