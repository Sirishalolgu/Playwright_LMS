
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


      When('Admin enters the data only to the mandatory fields and clicks save button', async ({}) => {
        
        const programName = 'TestPrograms'; // Replace with the desired program name
        await batchPage.selectProgramNameFromDropdown(programName);
        const randomSuffix = Math.floor(100000 + Math.random() * 900000).toString().slice(0, 5); // Generate a random number less than 6 digits
        await batchPage.enterBatchNameSuffix(randomSuffix);  
        await batchPage.enterDescription('Test Description');
        await batchPage.selectRadioButton(true);
        await batchPage.enterNumberOfClasses('5');
        await batchPage.saveBatch();
      });
      
      Then('Admin should get a successful message', async ({}) => {
        


        const toastMessage = await batchPage.getToastMessage();
        console.log(`Toast message displayed: ${toastMessage}`);
       // expect(toastMessage).toBe('Batch saved successfully');
      });

      When('Admin leaves blank the mandatory  {string}, {string}, {string}, {string}, {string} fields and clicks save button', async ({}, programName, batch, description, NoOfClasses, status) => {

        await batchPage.selectProgramNameFromDropdown(programName);
        await batchPage.enterBatchNameSuffix(batch);
        await batchPage.enterDescription(description);
       // await batchPage.selectRadioButton(status);

        if (status === 'true') {
            batchPage.selectfirstRadioButton();
        }

        else {
            batchPage.selectSecondRadioButton();
        }
        await batchPage.enterNumberOfClasses(NoOfClasses);

        await batchPage.saveBatch();

        });
      
      Then('Admin should get an error message on the respective mandatory field {string}', async ({}, arg) => {
        const errorMessages = await batchPage.getMessages();
        console.log(`Error messages displayed: ${errorMessages}`);
       // expect(errorMessages).toContain(arg);

    });
      

    When('Admin enters the valid data {string}, {int}, {string}, {int}, {string} fields and clicks save button', async ({}, programName, batch, description, NoOfClasses, status) => {

        console.log('Program Name:', programName); // Should log "TestPrograms"
        console.log('Batch Name (as integer):', batch); // Should log 88452
        console.log('Description:', description); // Should log "Desc1"
        console.log('Number of Classes (as integer):', NoOfClasses); // Should log 10
        console.log('Status:', status); // Should log "true"
    


        await batchPage.selectProgramNameFromDropdown(programName);
        await batchPage.enterBatchNameSuffix(batch.toString());
        
        await batchPage.enterDescription(description);
        await batchPage.selectRadioButton(status);

        await batchPage.enterNumberOfClasses(NoOfClasses.toString());


        await batchPage.saveBatch();

        
      });


    //   When('Admin enters the valid data {string}, {string}, {string}, {string}, {string} fields and clicks cancel button', async ({}, programName, BatchName, description, NoOfClasses, status) => {

    //     await batchPage.selectProgramNameFromDropdown(programName);
    //     await batchPage.enterBatchNameSuffix(batch);
    //     await batchPage.enterDescription(description);
    //     await batchPage.selectRadioButton(status);

    //     await batchPage.enterNumberOfClasses(NoOfClasses);
    //     await batchPage.closeBatchWindow();

    // });

    When('Admin enter the valid data {string}, {string}, {string}, {string}, {string} fields and clicks cancel button', async ({}, programName, BatchName, description, NoOfClasses, status) => {
        await batchPage.selectProgramNameFromDropdown(programName);
        await batchPage.enterBatchNameSuffix(BatchName);
        await batchPage.enterDescription(description);
        await batchPage.selectRadioButton(status);

        await batchPage.enterNumberOfClasses(NoOfClasses);
        await batchPage.closeBatchWindow();


    });

    Then('Admin can see the batch {string}{string} details popup closes without creating any batch', async ({}, programName, batchName) => {
        
        const searchResult = await batchPage.searchBatch(programName + batchName);
        expect(searchResult).toBeFalsy();
        console.log(`Batch details popup closed successfully without creating any batch, and no batch was found with the given program (${programName}) and batch name (${batchName}).`);
    });
      
      Then('Admin can see the batch details popup closes without creating any batch', async ({}) => {
        const toastMessage = await batchPage.getToastMessage();
        expect(toastMessage).toBeFalsy();
        console.log('Batch details popup closed successfully without creating any batch, and no success message is visible.');

    });


    When('Admin clicks on the close icon', async ({}) => {

        await batchPage.closeBatchWindow();


    });
      
      Then('batch details pop up closes', async ({}) => {

            await batchPage.verifyBatchDetailsPopupVisible();
    });
      

    Given('Admin wants to run a specific feature file', async ({}) => {



    });
      
      When('Admin runs the command to execute the feature file', async ({}) => {



    });
      
      Then('the specified feature file should be executed', async ({}) => {



    });



    When('Admin clicks the delete Icon on any row', async ({}) => {
      //  await batchPage.clickonBatchButton();
      await batchPage.clickAddBatchButton();
      await batchPage.closeBatchWindow();
        await batchPage.deleteFirstRow();
       // await page.pause();


      });
      
      Then('Admin should see the confirm alert box with yes and no button', async ({}) => {

        console.log(await batchPage.getConfirmationDialogText());
      


    });


    Given('Admin is on the batch confirm popup page', async ({}) => {
        
        await batchPage.clickAddBatchButton();
        await batchPage.closeBatchWindow();
          await batchPage.deleteFirstRow();

      });
      
      When('Admin clicks on the delete icon and click yes button', async ({}) => {

        await batchPage.clickYesOnConfirmationDialog();
    });
      
      Then('Admin should see the successful message and the batch should be deleted', async ({}) => {

      console.log(await batchPage.getSuccessBatchDeletedMessage());

    });


    When('Admin clicks on the delete icon and click no button', async ({}) => {
  await batchPage.clickNoOnConfirmationDialog();

    });
      
      Then('Admin should see the alert box closed and the batch is not deleted', async ({}) => {
        const isAlertBoxClosed = await batchPage.isConfirmationDialogClosed();
        expect(isAlertBoxClosed).toBeTruthy();
        const isBatchDeleted = await batchPage.isBatchDeleted();
        expect(isBatchDeleted).toBeFalsy();
        console.log('Alert box closed successfully, and the batch was not deleted.');

    });

    Then('Admin should see the alert box closed', async ({}) => {

        const isAlertBoxClosed = await batchPage.isConfirmationDialogClosed();
        expect(isAlertBoxClosed).toBeTruthy();
        console.log('Alert box closed successfully.');

    });

AfterScenario(async ({ page }) => {

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