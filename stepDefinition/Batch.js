
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();
const { test, playwright } = require('@playwright/test');
const { BatchPage } = require('../pageObject/BatchPO');
let batchPage;
let errorMessage;

const { BeforeScenario, AfterScenario } = createBdd();

// Hook that runs before scenarios tagged with @batch
BeforeScenario({ tags: '@batch' }, async ({ page }) => {
    console.log('Running setup before scenarios tagged with @batch...');
   // console.log("Loaded dataset:", dataset);

    batchPage = new BatchPage(page);
    await batchPage.goto();

    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(200);
    console.log(await page.title());
    await batchPage.fillCredentials();
});


// Add your step definitions here


Given('Admin is on the home Page', async function () {
   
    if (!batchPage) {
        throw new Error('batchPage is not initialized');
      }
      console.log('Admin is on the home page');
});

// Given('Admin is on the home Page', async ({ page }) => {

//      // await this.batchPO.goto();
//    // this.batchPO.fillCredentials();
//   });

When('Admin clicks on the {string} menu from the header', async ({ page }, menuName) => {
    if (!batchPage) {
        throw new Error('batchPage is not initialized');
      }
    await batchPage.clickMenu(menuName);
});

Then('Admin should be in the Manage {string} Page', async ({ page }, pageName) => {
    await batchPage.verifyBatchPage(pageName);

});

Given('Admin is on batch page', async ({ page }) => {

    if (!batchPage) {
        throw new Error('batchPage is not initialized');
      }



    await batchPage.clickonBatchButton();
    //ait batchPage.verifyBatchPage(pageName);


});

When('Admin clicks {string} on the navigation bar', async ({page }, menuName) => {
    if (!batchPage) {
        throw new Error('batchPage is not initialized');
      }
    await batchPage.clickMenu(menuName);

});

Then('Admin should see sub menu in menu bar as {string}', async ({ }, arg) => {
    if (!batchPage) {
        throw new Error('batchPage is not initialized');
      }


});


When('Admin clicks on {string} under the {string} menu bar', async ({}, AddNewBatch, batch) => {
   await batchPage.clickAddBatchButton();

});
  
  Then('Admin should see the Batch Details pop up window', async ({}) => {
    await batchPage.verifyBatchDetailsPopupVisible();



});

Given('Admin is on the Batch Details Pop Up Window', async ({}) => {
    await batchPage.getBatchDetailsText();

});
  
  When('Admin checks all the fields are enabled', async ({}) => {
    


});
  
  Then('The pop up should include the fields Batch Name, Number of classes and Description as text box, Program Name as drop down, Status as radio button', async ({}) => {
   
    await batchPage.isTestProgramEnabled();
    await batchPage.isRadioButtonEnabled();
    await batchPage.isSaveButtonEnabled();  
    await batchPage.isBatchNameTextbox();
    await batchPage.isDescriptionTextbox();
    await batchPage.isNumberOfClassesSpinButton();


      });


      When('Admin selects program name present in the dropdown', async ({}) => {
        const programName = 'TestPrograms'; // Replace with the desired program name
        await batchPage.selectProgramNameFromDropdown(programName);
        console.log(`Selected program name: ${programName}`);
      });
      
      Then('Admin should see selected program name in the batch name prefix box', async ({}) => {
        const batchNamePrefix = await batchPage.getBatchNamePrefix();
        expect(batchNamePrefix).toContain('TestPrograms');
      });

      When('Admin enters alphabets in batch name suffix box', async ({}) => {
        const invalidSuffix = 'abc'; // Example of invalid input
        await batchPage.enterBatchNameSuffix(invalidSuffix);
         errorMessage = await batchPage.getBatchNameSuffixErrorMessage();

      });
      
      Then('Admin should get error message below the text box of respective field', async ({}) => {
        console.log(`Error message displayed: ${errorMessage}`);



      });


      When('Admin enters alphabets in batch name prefix box', async ({}) => {
        
        const invalidPrefix = 'xyz'; // Example of invalid input
       // await batchPage.enterBatchNamePrefix(invalidPrefix);
        try {
            await batchPage.enterBatchNamePrefix(invalidInput);
        } catch (error) {
            console.warn("Could not enter value in Batch Name Prefix box:", error.message);
        }

      });
      
      Then('Admin should see empty text box', async ({}) => {
       
    const textBoxValue = await batchPage.getBatchNamePrefixTextBoxValue();
    expect(textBoxValue).toBe('');

      });

AfterScenario(async ({ page }) => {
    //  console.log(`Finished scenario: ${scenario.name}`);
    await page.screenshot({
        path: `screenshots/screenshot_${Date.now()}.png`,
        fullPage: true,
    });
    // await page.screenshot({
    //   path: `screenshots/${scenario.name.replace(/\s+/g, '_')}.png`,
    //   fullPage: true,
    // });
    await page.close();
});