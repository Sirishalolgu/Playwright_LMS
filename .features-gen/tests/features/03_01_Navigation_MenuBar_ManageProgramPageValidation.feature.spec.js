// Generated from: tests\features\03_01_Navigation_MenuBar_ManageProgramPageValidation.feature
import { test } from "playwright-bdd";

test.describe('Navigation', () => {

  test.beforeEach('Background: Admin is logged in to LMS Portal', async ({ Given, page, When }) => {
    await Given('Admin is on dashboard page after Login', null, { page }); 
    await When('Admin clicks Program on the navigation bar', null, { page }); 
  });
  
  test('Verify that Admin is able to navigate to Program module', { tag: ['@NavigationCheck'] }, async ({ Then }) => { 
    await Then('Admin should be navigated to Program module'); 
  });

  test('Verify any broken links on program page', { tag: ['@BrokenLinks'] }, async ({ When, page, Then }) => { 
    await When('Admin clicks on different buttons on the navigation bar', null, { page }); 
    await Then('Admin should not have any broken links for Program module', null, { page }); 
  });

  test('Verify heading in menu bar', { tag: ['@VefiryLMSTitle'] }, async ({ Then, page }) => { 
    await Then('Admin should see the heading "LMS - Learning Management System"', null, { page }); 
  });

  test('Verify other modules name displayed in menu bar', { tag: ['@VerifyOtherModuleNames'] }, async ({ Then, page }) => { 
    await Then('Admin should see the module names as in order "Program, Batch, Class, Logout"', null, { page }); 
  });

  test('Verify Logout displayed in menu bar', { tag: ['@VerifyLogout'] }, async ({ Then, page }) => { 
    await Then('Admin should see "Logout" in menu bar', null, { page }); 
  });

  test('Verify sub menu displayed in program menu bar', { tag: ['@VerifySubMenu'] }, async ({ Then }) => { 
    await Then('Admin should see sub menu in menu bar as "Add New Program"'); 
  });

  test('Verify heading in manage program', { tag: ['@VefiryManageProgram'] }, async ({ Then }) => { 
    await Then('Admin should see the heading on paogram page as "Manage Program"'); 
  });

  test('Verify view details of programs', { tag: ['@VerifyProgramModuleDetails'] }, async ({ Then }) => { 
    await Then('Admin should able to see "Program Name, Program Description, Program Status" for each program'); 
  });

  test('Verify the Multiple Delete button state', { tag: ['@VerifyMultiDelete'] }, async ({ Then }) => { 
    await Then('Admin should see a Delete button in left top is disabled'); 
  });

  test('Verify the Search button', { tag: ['@VerifySearchButton'] }, async ({ Then }) => { 
    await Then('Admin should see Search bar with text as "Search..."'); 
  });

  test('Verify column header name of data table', { tag: ['@VefirycolumnHeader'] }, async ({ Then }) => { 
    await Then('Admin should see data table with column header on the Manage Program Page as "Program Name, Program Description, Program Status, Edit/Delete"'); 
  });

  test('Verify checkbox default state beside Program Name column header', { tag: ['@Verify_Checkbox_Default_State_In_Column_Header'] }, async ({ Then }) => { 
    await Then('Admin should see checkbox default state as unchecked beside Program Name column header'); 
  });

  test('Verify checkboxes default state beside each Program names in the data table', { tag: ['@Verify_Checkbox_Default_State_In_Table_Header'] }, async ({ Then }) => { 
    await Then('Admin should see check box default state as unchecked on the left side in all rows against program name'); 
  });

  test('Verify Sort icon in manage program', { tag: ['@VerifySortIcon'] }, async ({ Then }) => { 
    await Then('Admin should see the sort arrow icon beside to each column header except Edit and Delete'); 
  });

  test('Verify edit and delete icon in manage program', { tag: ['@VerifyEdit&DeleteIcon'] }, async ({ Then }) => { 
    await Then('Admin should see the Edit and Delete buttons on each row of the data table'); 
  });

  test('Verify pagination icons below data table in manage program', { tag: ['@VerifyPagination'] }, async ({ Then }) => { 
    await Then('Admin should see the text as "Showing x to y of z entries" along with Pagination icon below the table'); 
  });

  test('Verify footer message in manage program', { tag: ['@VerifyFooter'] }, async ({ Then }) => { 
    await Then('Admin should see the footer as "In total there are z programs."'); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\03_01_Navigation_MenuBar_ManageProgramPageValidation.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":8,"tags":["@NavigationCheck"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Admin should be navigated to Program module","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":12,"tags":["@BrokenLinks"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When Admin clicks on different buttons on the navigation bar","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Admin should not have any broken links for Program module","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":17,"tags":["@VefiryLMSTitle"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the heading \"LMS - Learning Management System\"","stepMatchArguments":[{"group":{"start":29,"value":"\"LMS - Learning Management System\"","children":[{"start":30,"value":"LMS - Learning Management System","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":21,"tags":["@VerifyOtherModuleNames"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the module names as in order \"Program, Batch, Class, Logout\"","stepMatchArguments":[{"group":{"start":46,"value":"\"Program, Batch, Class, Logout\"","children":[{"start":47,"value":"Program, Batch, Class, Logout","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":25,"tags":["@VerifyLogout"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then Admin should see \"Logout\" in menu bar","stepMatchArguments":[{"group":{"start":17,"value":"\"Logout\"","children":[{"start":18,"value":"Logout","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":29,"tags":["@VerifySubMenu"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then Admin should see sub menu in menu bar as \"Add New Program\"","stepMatchArguments":[{"group":{"start":41,"value":"\"Add New Program\"","children":[{"start":42,"value":"Add New Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":36,"pickleLine":33,"tags":["@VefiryManageProgram"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the heading on paogram page as \"Manage Program\"","stepMatchArguments":[{"group":{"start":48,"value":"\"Manage Program\"","children":[{"start":49,"value":"Manage Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":40,"pickleLine":37,"tags":["@VerifyProgramModuleDetails"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then Admin should able to see \"Program Name, Program Description, Program Status\" for each program","stepMatchArguments":[{"group":{"start":25,"value":"\"Program Name, Program Description, Program Status\"","children":[{"start":26,"value":"Program Name, Program Description, Program Status","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":44,"pickleLine":41,"tags":["@VerifyMultiDelete"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then Admin should see a Delete button in left top is disabled","stepMatchArguments":[]}]},
  {"pwTestLine":48,"pickleLine":45,"tags":["@VerifySearchButton"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Search bar with text as \"Search...\"","stepMatchArguments":[{"group":{"start":41,"value":"\"Search...\"","children":[{"start":42,"value":"Search...","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":52,"pickleLine":49,"tags":["@VefirycolumnHeader"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then Admin should see data table with column header on the Manage Program Page as \"Program Name, Program Description, Program Status, Edit/Delete\"","stepMatchArguments":[{"group":{"start":77,"value":"\"Program Name, Program Description, Program Status, Edit/Delete\"","children":[{"start":78,"value":"Program Name, Program Description, Program Status, Edit/Delete","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":56,"pickleLine":53,"tags":["@Verify_Checkbox_Default_State_In_Column_Header"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"Then Admin should see checkbox default state as unchecked beside Program Name column header","stepMatchArguments":[]}]},
  {"pwTestLine":60,"pickleLine":57,"tags":["@Verify_Checkbox_Default_State_In_Table_Header"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":58,"keywordType":"Outcome","textWithKeyword":"Then Admin should see check box default state as unchecked on the left side in all rows against program name","stepMatchArguments":[]}]},
  {"pwTestLine":64,"pickleLine":61,"tags":["@VerifySortIcon"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":62,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the sort arrow icon beside to each column header except Edit and Delete","stepMatchArguments":[]}]},
  {"pwTestLine":68,"pickleLine":65,"tags":["@VerifyEdit&DeleteIcon"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":66,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Edit and Delete buttons on each row of the data table","stepMatchArguments":[]}]},
  {"pwTestLine":72,"pickleLine":69,"tags":["@VerifyPagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":70,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the text as \"Showing x to y of z entries\" along with Pagination icon below the table","stepMatchArguments":[{"group":{"start":29,"value":"\"Showing x to y of z entries\"","children":[{"start":30,"value":"Showing x to y of z entries","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":76,"pickleLine":73,"tags":["@VerifyFooter"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":74,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the footer as \"In total there are z programs.\"","stepMatchArguments":[{"group":{"start":31,"value":"\"In total there are z programs.\"","children":[{"start":32,"value":"In total there are z programs.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end