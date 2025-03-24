import { createBdd } from 'playwright-bdd';

const{Given, When, Then} = createBdd();
const { POManager } = require('../pageObject/POManager');
const { ProgramPage } = require('../pageObject/ProgramPage');
const { expect } = require('playwright/test');

let poManager;
let programPage;
// Given('Admin is on dashboard page after Login', function () {
//     // Write code here that turns the phrase above into concrete actions
    
//   });

  // When('Admin clicks {string} on the navigation bar', function (string) {
When('Admin clicks Program on the navigation bar', async ({ page }) => {
  console.log("i am on program page");
  poManager = new POManager(page);
  programPage = new ProgramPage(page);
  await page.waitForTimeout(200);  
  programPage.clickOnProgram();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);
  console.log("program page title = " + await page.title());
 
 // console.log("response = " + response.json());
  //  await this.page.waitForTimeout(300);
  //   console.log("program button name is = " + await this.page.locator("#button").textContent());
});

Then('Admin should be navigated to Program module', async ({page}) => {
  const progloc = programPage.getLocator();
  console.log("prg locator = " + await programPage.getLocator());
  await expect(progloc).toContainText('Program');
});

//   Given('Admin is on dashboard page after Login', function () {
//     // Write code here that turns the phrase above into concrete actions
   
//   });

//   When('Admin clicks {string} on the navigation bar', function (string) {
//     // Write code here that turns the phrase above into concrete actions
   
//   });

  Then('Admin should not have any broken links for Program module', async ({page}) => {
    // await page.waitForTimeout(500);
    // programPage.clickOnProgram();
    await page.waitForTimeout(500);
    //await expect(programPage.logoutButton).toBeVisible();
    programPage.getBroken();
   
  });

//   Given('Admin is on dashboard page after Login', function () {
//     // Write code here that turns the phrase above into concrete actions
   
//   });

//   When('Admin clicks {string} on the navigation bar', function (string) {
//     // Write code here that turns the phrase above into concrete actions
  
//   });

//   Then('Admin should see the heading {string}', function (string) {
//     // Write code here that turns the phrase above into concrete actions
   
//   });

//   Given('Admin is on dashboard page after Login', function () {
   
//   });

//   When('Admin clicks {string} on the navigation bar', function (string) {
   
//   });

//   Then('Admin should see the module names as in order {string}', function (string) {
    
//   });

//   Given('Admin is on dashboard page after Login', function () {
   
//   });

//   When('Admin clicks {string} on the navigation bar', function (string) {
    
//   });

//   Then('Admin should see Logout in menu bar', function () {
    
//   });

//   Given('Admin is on dashboard page after Login', function () {
   
//   });

//   When('Admin clicks {string} on the navigation bar', function (string) {
    
//   });

//   Then('Admin should see sub menu in menu bar as {string}', function (string) {
   
//   });

//   Given('Admin is on dashboard page after Login', function () {
    
//   });

//   When('Admin clicks {string} on the navigation bar', function (string) {
   
//   });

//   Then('Admin should see the heading {string}', function (string) {
   
//   });

//   Given('Admin is on dashboard page after Login', function () {
   
//   });

//   When('Admin clicks {string} on the navigation bar', function (string) {
   
//   });

//   Then('Admin should able to see Program name, description, and status for each program', function () {
   
//   });

//   Given('Admin is on dashboard page after Login', function () {
   
//   });

//   When('Admin clicks {string} on the navigation bar', function (string) {
    
//   });

//   Then('Admin should see a Delete button in left top is disabled', function () {
   
//   });

//    Given('Admin is on dashboard page after Login', function () {
    
//    });

//    When('Admin clicks {string} on the navigation bar', function (string) {
    
//    });

//    Then('Admin should see Search bar with text as {string}', function (string) {
    
//    });

//    Given('Admin is on dashboard page after Login', function () {
    
//    });

//    When('Admin clicks {string} on the navigation bar', function (string) {
    
//    });

//    Then('Admin should see data table with column header on the Manage Program Page as Program Name, Program Description, Program Status, Edit\\/Delete', function () {
    
//    });

//    Given('Admin is on dashboard page after Login', function () {
    
//    });

//    When('Admin clicks {string} on the navigation bar', function (string) {
    
//    });

//    Then('Admin should see checkbox default state as unchecked beside Program Name column header', function () {
    
//    });

//    Given('Admin is on dashboard page after Login', function () {
     
//    });

//    When('Admin clicks {string} on the navigation bar', function (string) {
   
//    });

//    Then('Admin should see check box default state as unchecked on the left side in all rows against program name', function () {
     
//    });

//    Given('Admin is on dashboard page after Login', function () {
    
//    });

//    When('Admin clicks {string} on the navigation bar', function (string) {
    
//    });

//    Then('Admin should see the sort arrow icon beside to each column header except Edit and Delete', function () {
   
//    });

//    Given('Admin is on dashboard page after Login', function () {
    
//    });

//    When('Admin clicks {string} on the navigation bar', function (string) {
    
//    });

//    Then('Admin should see the Edit and Delete buttons on each row of the data table', function () {
     
//    });

//    Given('Admin is on dashboard page after Login', function () {
     
//    });

//    When('Admin clicks {string} on the navigation bar', function (string) {
   
//    });

//    Then('Admin should see the text as {string} along with Pagination icon below the table', function (string) {
    
//    });

//    Given('Admin is on dashboard page after Login', function () {
   
//    });

//    When('Admin clicks {string} on the navigation bar', function (string) {
    
//    });

//    Then('Admin should see the footer as {string}', function (string) {
    
//    });