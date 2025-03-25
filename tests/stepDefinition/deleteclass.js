import { createBdd } from 'playwright-bdd';
const{Given, When, Then} = createBdd();
const { POManager } = require('../pageObject/POManager');
const { ClassPage } = require('../pageObject/ClassPage');
const { expect } = require('playwright/test');


let poManager;
let classpage;
let msg;

When('Admin clicks the delete icon',  {timeout: 10*1000},async ({page}) => {
      poManager = new POManager(page);
      classpage= new ClassPage(page);
     
      await classpage.deleteClassButton();
  });
  
  Then('Admin should see a alert open with heading {string} along with  <YES> and <NO> button for deletion',{timeout: 10*1000}, async ({page}, arg) => {
      await expect(classpage.confirmDelete).toBeVisible();
      await expect(classpage.NoButton).toBeVisible();
      await expect(classpage.yesButton).toBeVisible();
  });

  When('Admin clicks yes option', {timeout: 10*1000},async ({page}) => {
    poManager = new POManager(page);
    classpage= new ClassPage(page);
    await classpage.deleteClassButton();
    
    msg=await classpage.delete_yes_Button();
    console.log("msg is:",msg);
  });
  
  Then('Admin gets a message {string} alert and do not see that Class in the data table', async ({page}, arg) => {
    await expect(classpage.classDeletemsg).toHaveText('Class Deleted');
  });
  
  When('Admin clicks  No option',{timeout: 10*1000}, async ({page}) => {
    poManager = new POManager(page);
    classpage= new ClassPage(page);
    await classpage.deleteClassButton();
   await classpage.delete_NO_Button();
  });
  
  Then('Admin can see the deletion alert disappears without deleting', async ({}) => {
   await expect(classpage.manageClassLabel).toBeVisible();
  });
  
  When('Admin clicks on close button', {timeout: 10*1000},async ({page}) => {
    poManager = new POManager(page);
    classpage= new ClassPage(page);
    await classpage.deleteClassButton();
    await classpage.delete_close_button();
  });
  
  Then('Admin can see the deletion alert disappears without any changes', async ({}) => {
    await expect(classpage.manageClassLabel).toBeVisible();
  });