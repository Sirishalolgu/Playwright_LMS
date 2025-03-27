import { createBdd } from 'playwright-bdd';

const{Given, When, Then} = createBdd();
const  POManager = require('../pageObject/POManager');
const ProgramPage = require('../pageObject/ProgramPage');
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
  programPage.clickOnProgram();
  await programPage.closeAddProgram();  
});


Then('Admin should be navigated to Program module', async ({}) => {
  const addProgramButton = await programPage.getManageProgramTitle();
  expect(addProgramButton).toEqual("Manage Program"); 
});

When('Admin clicks on different buttons on the navigation bar', async ({page}) => {
  await programPage.brokenLinks(page);
});

  Then('Admin should not have any broken links for Program module', async ({page}) => {   
   console.log("I am in Add program");
  });

   Then('Admin should see the heading {string}', async ({page}, heading) => {
    const title = await programPage.getLMSTitle();  
    expect(title).toEqual(heading);  
   });

   Then('Admin should see the module names as in order {string}', async ({page}, heading) => {
    const title = await programPage.getButtonTitle();  
    expect(title).toEqual(heading);  
   });

  Then('Admin should see {string} in menu bar', async ({page},title) => {
    const logoutButton = await programPage.getLogoutButtonText();
    expect(logoutButton).toEqual(title);
  });
   
  Then('Admin should see sub menu in menu bar as Add New Program', async () =>{
    const ProgramButton = await programPage.getAddProgramButtonText();
    expect(ProgramButton).toEqual("Add New Program");
  });

  Then('Admin should see the heading on paogram page as {string}', async (title) => {
    const addProgramButton = await programPage.getManageProgramText();
    expect(addProgramButton).toEqual(title);
  });

  Then('Admin should able to see {string} for each program', async ({}, heading) => {
    const tableHeading = await programPage.getProgramTableHeadings();
    expect(tableHeading).toEqual(heading);
   });

  Then('Admin should see a Delete button in left top is disabled', async function () {
    const deleteDisabled = await programPage.getDeleteDisabled();
    expect(deleteDisabled).toBeTruthy();
  });

   Then('Admin should see Search bar with text as {string}', async ({}, heading) => {
     const searchBtn = await programPage.getSerachButton();
     expect(searchBtn).toEqual(heading);
   });

   Then('Admin should see data table with column header on the Manage Program Page as {string}', async ({}, heading) => {
    const tableHeads = await programPage.getTableHeaders();
    expect(tableHeads).toEqual(heading);
   });

   Then('Admin should see checkbox default state as unchecked beside Program Name column header', async function () {
    const checkBoxStatus = await programPage.getUncheckedCheckBox();
    expect(checkBoxStatus).toBeFalsy();
   });

   Then('Admin should see check box default state as unchecked on the left side in all rows against program name',async function () {
    const checkBoxStatus = await programPage.getAllCheckboxes();
    expect(checkBoxStatus.every(status => status === false)).toBe(true);
   });

   Then('Admin should see the sort arrow icon beside to each column header except Edit and Delete', async function () {
      const sortingIcons = await programPage.getSortIcon();
      expect(sortingIcons.every(visibility => visibility === true)).toBe(true);
   });

   Then('Admin should see the Edit and Delete buttons on each row of the data table', async function () {
     const deleteIcons = await programPage.getDeleteIcons();
     expect(deleteIcons.every(visibility=> visibility === true)).toBe(true);
   });
 
   Then('Admin should see the text as {string} along with Pagination icon below the table', async ({}, heading) => {
     const paginator = await programPage.getPaginator();
     const paginationRegex = /^Showing \d+ to \d+ of \d+ entries$/;
     expect(paginationRegex.test(paginator)).toBeTruthy();
   });

   Then('Admin should see the footer as {string}', async ({}, heading) => {
     const footerText = await programPage.getFooterText();
     const footerReg = /^ In total there are \d+\d+ programs. $/;  
     expect(footerReg.test(footerText)).toBeTruthy();
   });
   

  
  When('Admin clicks on New Program under the Program menu bar', async ({}) => {
    await programPage.clickOnAddProgram();   
  });
  
  Then('Admin should see pop up window for program details', async ({}) => {
    const popupVisible = await programPage.isPopUpVisible();
    expect(popupVisible).toBe(true);
  });
  
  Then('Admin should see window title as {string}', async ({}, title) => {
    const programDetailsTitle = await programPage.getProgramDetailsTitle();
    expect(programDetailsTitle).toEqual(title);
  });
  
  Then('Admin should see red {string} mark beside mandatory field {string}', async ({}, star, name) => {
   const starAfterName = await programPage.getStarAfterName();
   expect(starAfterName).toEqual(star);
  });
  
  Given('Admin is on Program details form', async ({}) => {
    await programPage.clickOnAddProgramButton();
  });
  
  When('Admin clicks save button without entering mandatory', async ({}) => {
    await programPage.clickOnSave();
  });
  
  Then('Admin gets message {string}', async ({}, expectedMessage) => {
    const errorMessages = await programPage.getErrorMessage();
    const expectedMessages = ["Program name", "Description", "Status"].map(field => `${field} is required`);
    expect(errorMessages).toEqual(expectedMessages);
  });
  
  When('Admin clicks Cancel button', async ({}) => {
    await programPage.clickCloseButton();
  });
  
  Then('Admin can see Program Details form disappears', async ({}) => {
    const popupVisible = await programPage.isPopUpVisible();
    expect(popupVisible).toBe(false);
  });

  When('Admin selects the status of the program by clicking on the radio button {string}', async ({}, arg) => {
    await programPage.getStatusActive();
  });
  
  Then('Admin can see {string} status selected', async ({}, arg) => {
    const isChecked = await programPage.checkIfActiveChecked();
    expect(isChecked).toBe(true);
  });

  When('Admin enters mandatory details using {string} in the text box', async ({}, arg) => {
    await programPage.getData();
  });
  
  Then('Admin gets success message', async ({}) => {
    const successMsg = await programPage.getSuccessMessage();  
    expect(successMsg).toEqual('Program Created Successfully');
  });

  When('Admin Click on cancel button', async ({}) => {
   await programPage.clickCancelProgram();
  });
  
  When('Admin Click on {string} button', async ({}, arg) => {
    await programPage.clickCloseButton();
  });

  When('Admin is on Program module', async ({}) => {
    await programPage.getProgramModule();
  });

  When('Admin clicks on Edit option for particular program', async ({}) => {
    await programPage.clickOnEditButton();
  });
  
  When('Admin edits the program name and click on save button', async ({}) => {
    await programPage.editProgramName();
  });
  
  Then('Updated program name is seen by the Admin', async ({}) => {
    const edittedNameVisible = await programPage.getEdittedProgramName('dataWithJsonNew');
    expect(edittedNameVisible).toBe(true);
  });
  
When('Admin edits the description text and click on save button', async ({}) => {
  await programPage.editProgramDescription();
});

Then('Admin can see the description is updated', async ({}) => {
  const edittedDesriptionVisible = await programPage.getEdittedProgramDescription('editted Description');
  expect(edittedDesriptionVisible).toBe(true);
});

When('Admin can change the status of the program and click on save button', async ({}) => {
  await programPage.editProgramStatus();
});

Then('Status updated can be viewed by the Admin', async ({}) => {
  const activeStaus = await programPage.getEdittedActiveStatus();
  expect(activeStaus).toBe(true);
});
 
When('Admin click on cancel button', async ({}) => {
  await programPage.clickCancelButton();
});

Then('Admin can see the Program details form disappears', async ({}) => {
  const popupVisible = await programPage.isPopUpVisible();
    expect(popupVisible).toBe(false);
});

When('Admin searches with newly updated {string}', async ({}, arg) => {
  await programPage.clickSearchWithEditedProgram();
});

Then('Admin verifies that the details are correctly updated', async ({}) => {
  const edittedNameVisible = await programPage.getEdittedProgramDescription('editedDescription');
  expect(edittedNameVisible).toBe(true);
});

When('Admin Click on {string} button on Program Details', async ({}, arg) => {
 await programPage.clickOnCloseOfProgramDetails();
});

When('Admin clicks on delete button for a program', async ({}) => {
  await programPage.clickDeleteButton();
});

Then('Admin will get confirm deletion popup and able to see the {string} text', async ({}, arg) => {
 const isPopupVisible = await programPage.getDeleteConfirm();
 expect(isPopupVisible).toBe(true);
});

Given('Admin is on Confirm deletion alert for program', async ({}) => {
  await programPage.clickDeleteButton();
});

When('Admin clicks on Yes button on the alert for program', async ({}) => {
 await programPage.confirmDeleteProgram();
});

Then('Admin can see alert message {string}', async ({}, message) => {
  const receivedMessage = await programPage.getProgramDeletedMessage();
  expect(receivedMessage).toEqual(message);
});

When('Admin clicks on <No> button on the alert for program', async ({}) => {
  await programPage.cancelDeleteProgram();
});

Then('Admin can see the deletion alert disappears without deleting for program', async ({}) => {
  const isPopupVisible = await programPage.getDeleteConfirm();
  expect(isPopupVisible).toBe(false); 
});

When('Admin Click on <X> button on the alert for program', async ({}) => {
  await programPage.closeDeleteConfirm();
});

Then('Admin can see Confirm Deletion form disappear', async ({}) => {
  const isPopupVisible = await programPage.getDeleteConfirm();
  expect(isPopupVisible).toBe(false); 
});

When('Admin Searches for {string} Deleted Program name', async ({}, arg) => {
  await programPage.isSearchedProgramDeleted();
});

Then('There should be zero results', async ({}) => {
  const receivedMessage = await programPage.isAllDeleted();
  expect(receivedMessage).toBe(0);
});

When('Admin clicks any checkbox in the data table for programpage', async ({}) => {
  await programPage.clickOnCheckbox();
});

Then('Admin should see common delete option enabled under header Manage Program for programpage', async ({}) => {
  const isEnabled = await programPage.isDeleteEnabled();
  expect(isEnabled).toBe(true);
});

Given('Admin is on Confirm Deletion alert for programpage', async ({}) => {
  await programPage.clickDeleteByCheckboxSelection();
});

Then('Admin should land on Manage Program page and can see the selected programs are deleted from the data table for programpage', async ({}) => {
  const addProgramButton = await programPage.getManageProgramText();
    expect(addProgramButton).toEqual("Manage Program");  
});

When('Admin enter the program to search By program name', async ({}) => {
  await programPage.clickSearchWithProgramName();
});

Then('Admin should able to see Program name description and status for searched program name', async ({}) => {
  const tableHeading = await programPage.getProgramSearchHeadings();
    expect(tableHeading).toEqual("Program Name, Program Description, Program Status");
});

When('Admin enter the program to search By program description', async ({}) => {
  await programPage.clickSearchWithProgramDescription();
});

Then('Admin should able to see Program name description and status for searched program description', async ({}) => {
  const tableHeading = await programPage.getProgramSearchHeadings();
    expect(tableHeading).toEqual("Program Name, Program Description, Program Status");
});

When('Admin enter the program to search By program name that does not exist', async ({}) => {
  await programPage.clickSearchWithNonExistantProgram();
});

When('Admin enter the program to search By partial name of program', async ({}) => {
 await programPage.clickSearchWithPartialProgramName();
});

When('Admin clicks on Arrow next to program Name', async ({}) => {
  await programPage.clickProgramNameSort();
});

Then('Admin See the Program Name is sorted in Ascending or Descending order', async ({}) => {
  const sortedOrder = await programPage.isProgramNameSorted();
  expect(sortedOrder).not.toBe("Not Sorted");
});

When('Admin clicks on Arrow next to Program Description', async ({}) => {
  await programPage.clickProgramDescriptionSort();
});

Then('Admin See the program Description is sorted in Ascending or Descending order', async ({}) => {
  const sortedOrder = await programPage.isProgramDesriptionSorted();
  expect(sortedOrder).not.toBe("Not Sorted");
});

When('Admin clicks on Arrow next to Program status', async ({}) => {
  await programPage.clickProgramStatusSort();
});

Then('Admin See the Program Status is sorted in Ascending or Descending order', async ({}) => {
  const sortedOrder = await programPage.isProgramStatusSorted();
  expect(sortedOrder).not.toBe("Not Sorted");
});

When('Admin clicks Next page link on the program table', async ({}) => {
  await programPage.clickPaginatorNext();
});

Then('Admin should see the Pagination has Next active link', async ({}) => {
  const isEnabled = await programPage.isPaginatorNextEnabled();
  expect(isEnabled).toBe(true);
});

When('Admin clicks Last page link', async ({}) => {
  await programPage.clickPaginatorLast();
});

Then('Admin should see the last page record on the table with Next page link are disabled', async ({}) => {
  const isEnabled = await programPage.isPaginatorNextEnabled();
  expect(isEnabled).toBe(false);
});

Given('Admin is on last page of Program module table', async ({}) => {
  await programPage.clickPaginatorLast();
});

When('Admin clicks Previous page link', async ({}) => {
  await programPage.clickPaginatorPrev();
});

Then('Admin should see the previous page record on the table with pagination has previous page link', async ({}) => {
 const isPreviousPage = await programPage.isPreviousPage();
 expect(isPreviousPage).toBe(true);
});

Given('Admin is on Previous Program page', async ({}) => {
  await programPage.clickPaginatorNext();
});

When('Admin clicks First page link', async ({}) => {
  await programPage.clickFirstPage();
});

Then('Admin should see the very first page record on the table with Previous page link are disabled', async ({}) => {
  const isEnabled = await programPage.isPaginatorPrevEnabled();
  expect(isEnabled).toBe(false);
});