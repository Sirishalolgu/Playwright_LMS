import { createBdd } from 'playwright-bdd';
const{Given, When, Then} = createBdd();
const { POManager } = require('../pageObject/POManager');
const { ClassPage } = require('../pageObject/ClassPage');
const { expect } = require('playwright/test');

let poManager;
let classpage;
When('Admin clicks the Class Navigation bar in the Header', {timeout: 10*1000}, async ({page}) => {
  poManager = new POManager(page);
  classpage= new ClassPage(page);
  //const classPage= poManager.getClassPage();
  await page.waitForTimeout(200);
  classpage.clickOnClass();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);
  console.log("i am on class page");
  console.log("class page title = " + await page.title());
});


Then('Admin should land on the Manage class page', {timeout: 10*1000}, async ({page}) => {
  //  await page.waitForTimeout(200);
  //   const currentUrl = classpage.getUrl();
  //   await expect(currentUrl).toHaveURL("https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/session");
});

Then('Admin should see the {string} Title',  {timeout: 10*1000},async ({page}, arg) => {
  await expect(classpage.titalOfClassPage).toContainText(" LMS - Learning Management System ");
});

Then('Admin should see the {string} Header', {timeout: 10*1000},async ({page}, arg) => {
  await expect(classpage.manageClassLabel).toContainText(" Manage Class");
});

Then('Admin should see the Search Bar in Manage class page',{timeout: 10*1000}, async ({}) => {
  await expect(classpage.searchBar).toBeVisible();
});

Then('Admin should see the datatable heading like Batchname,class topic,class description,status,class Date,staff name, Edit Delete', {timeout: 10*1000},async ({}) => {
  await expect(classpage.batchName).toBeVisible();
  await expect(classpage.classTopic).toBeVisible();
  await expect(classpage.classDiscription).toBeVisible();
  await expect(classpage.status).toBeVisible();
  await expect(classpage.classDate).toBeVisible();
  await expect(classpage.staffName).toBeVisible();
  //await expect(classpage.EditDelete).toBeVisible();
});

Then('Admin should see the {string} and enabled pagination controls under the data table', {timeout: 10*1000},async ({}, arg) => {
  await expect(classpage.paginationText).toBeVisible();
});

Then('Admin should see the Delete button under the Manage class page header.',{timeout: 10*1000}, async ({}) => {
  //await expect(classpage.deleteButton).toBeVisible();
});

Then('Admin should see Total no of classes in below of the data table.',{timeout: 10*1000}, async ({}) => {
 // await expect(classpage.totalClass).toBeEnabled();
});

