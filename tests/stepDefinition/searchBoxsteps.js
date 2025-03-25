import { createBdd } from 'playwright-bdd';
const{Given, When, Then} = createBdd();
const { POManager } = require('../pageObject/POManager');
const { ClassPage } = require('../pageObject/ClassPage');
const { expect } = require('playwright/test');

let poManager;
let classpage;
let allnamesofbatch;
let allnamesofclasstopic;
let allnamesofstaff;

When('Admin enter the Batch Name in search textbox',{timeout: 10*1000}, async ({page}) => {
     poManager = new POManager(page);
      classpage= new ClassPage(page);
     
     allnamesofbatch= await classpage.searchBoxByBatchName();
     console.log("All batch names are 'python101':", allnamesofbatch);
     
  });
  
  Then('Admin should see Class details are searched by Batch Name', async ({}) => {
   expect(allnamesofbatch).toBeTruthy();
  });
  
  When('Admin enter the Class topic in search textbox',{timeout: 10*1000}, async ({page}) => {
      poManager = new POManager(page);
      classpage= new ClassPage(page);
      allnamesofclasstopic= await classpage.searchBoxByClassTopic();
      console.log("All batch names are 'python006':", allnamesofclasstopic);
  });
  
  Then('Admin should see Class details are searched by Class topic', async ({}) => {
    expect(allnamesofclasstopic).toBeTruthy();
  });
  
  When('Admin enter the Staff Name in search textbox',{timeout: 10*1000}, async ({page}) => {
    poManager = new POManager(page);
      classpage= new ClassPage(page);
      allnamesofstaff= await classpage.searchBoxByStaffName();
      console.log("All batch names are 'python006':", allnamesofstaff);
  });
  
  Then('Admin should see Class details are searched by Staff name', async ({}) => {
    expect(allnamesofstaff).toBeTruthy();
  });
  