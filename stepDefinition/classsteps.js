import { createBdd } from 'playwright-bdd';
const{Given, When, Then} = createBdd();
const POManager  = require('../pageObject/POManager');
const ClassPage  = require('../pageObject/ClassPage');
const { expect } = require('playwright/test');

let poManager;
let classpage;

//=============================== classPage Validations=============================
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

//============================addNew ClassButton====================
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
//==============================addClassPopup=======================
  
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
//===========================deleteClass===================
  
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
//===========editIcon==================
    
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
      
      //=========searchBox================
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
        