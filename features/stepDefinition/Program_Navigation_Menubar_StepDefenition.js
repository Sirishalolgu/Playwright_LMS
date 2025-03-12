const{Given, When, Then} = require('@cucumber/cucumber');
const { POManager } = require('../../pageObject/POManager');
const { ProgramPage } = require('../../pageObject/ProgramPage');
const { expect } = require('playwright/test');

let poManager;
// Given('Admin is on dashboard page after Login', function () {
//     // Write code here that turns the phrase above into concrete actions
    
//   });

  // When('Admin clicks {string} on the navigation bar', function (string) {
    When('Admin clicks Program on the navigation bar', async function () {
     console.log("i am on program page");
     if(!this.page){
      throw new Error("Page not initialized");
    }    
      poManager = new POManager(this.page);
   const programPage = new ProgramPage(this.page);
   await this.page.waitForTimeout(2000);
   programPage.clickOnProgram();
   await this.page.waitForLoadState('networkidle');
   await this.page.waitForTimeout(3000);
    console.log("program page title = "+ await this.page.title());
   await this.page.waitForTimeout(3000);
    console.log("program button name is = " + await this.page.locator("#button").textContent());
  });

  Then('Admin should be navigated to Program module', async function () {
   await expect(programPage.getLocator().toContainText('Program'));
  });

//   Given('Admin is on dashboard page after Login', function () {
//     // Write code here that turns the phrase above into concrete actions
   
//   });

//   When('Admin clicks {string} on the navigation bar', function (string) {
//     // Write code here that turns the phrase above into concrete actions
   
//   });

//   Then('Admin should not have any broken links for Program module', function () {
//     // Write code here that turns the phrase above into concrete actions
   
//   });

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