import { createBdd } from 'playwright-bdd';
const{Given, When, Then} = createBdd();
const { POManager } = require('../pageObject/POManager');
const { ClassPage } = require('../pageObject/ClassPage');
const { expect } = require('playwright/test');


let poManager;
let classpage;
  
  When('Admin clicks the Class Navigation bar in the Header and clicks the addNewClass', {timeout: 10*1000}, async ({page}) => {
    poManager = new POManager(page);
    classpage= new ClassPage(page);
    //const classPage= poManager.getClassPage();
    await page.waitForTimeout(200);
    classpage.clickOnClass();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
    console.log("i am on class page");
    console.log("class page title = " + await page.title());
   
   classpage.clickOnAddNewClass();
   console.log("addNewClass");
  });

  Then('Admin should see a popup open for class details with empty form along with <SAVE> and <CANCEL> button',{timeout: 10*1000}, async ({page}) => {
    await page.waitForTimeout(200);
    await page.waitForLoadState('networkidle');
    await expect(classpage.classDetail).toBeVisible();
    await expect(classpage.saveButton).toBeVisible();
    await expect(classpage.cancelButton).toBeVisible();


  });
  
  Then('Admin should see few input fields and their respective text boxes in the class details window', {timeout: 10*1000},async ({page}) => {
    await page.waitForTimeout(200);
    await page.waitForLoadState('networkidle');
    await expect(classpage.batchNameText).toBeVisible();
    await expect(classpage.batchNameDropdown).toBeVisible();
    await expect(classpage.classTopic).toBeVisible();
    await expect(classpage.classDescription).toBeVisible();
    await expect(classpage.selectClassDates).toBeVisible();
    await expect(classpage.noOfClasses).toBeVisible();
    await expect(classpage.staffNameNew).toBeVisible();
    await expect(classpage.statusNew).toBeVisible();
    await expect(classpage.comments).toBeVisible();

    await expect(classpage.recording).toBeVisible();
    await expect(classpage.notes).toBeVisible();
    await expect(classpage.activeButton).toBeEnabled();
    await expect(classpage.inactiveButton).toBeEnabled();
    await expect(classpage.classTopicTextbox).toBeVisible();
    await expect(classpage.classDescriptionTextbox).toBeVisible();
    await expect(classpage.selectDatesTextbox).toBeVisible();
    await expect(classpage.noOfClassesTesxtbox).toBeVisible();
    await expect(classpage.staffNameDropdown).toBeVisible();

    await expect(classpage.commentTextbox).toBeVisible();
    await expect(classpage.notesTextbox).toBeVisible();
    await expect(classpage.recordingTextbox).toBeVisible();

  });