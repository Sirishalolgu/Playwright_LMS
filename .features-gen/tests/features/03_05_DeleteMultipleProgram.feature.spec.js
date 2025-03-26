// Generated from: tests\features\03_05_DeleteMultipleProgram.feature
import { test } from "playwright-bdd";

test.describe('Delete Multiple Program', () => {

  test.beforeEach('Background: Admin is on program module after reaching dashboard', async ({ Given, page, When }) => {
    await Given('Admin is on dashboard page after Login', null, { page }); 
    await When('Admin clicks Program on the navigation bar', null, { page }); 
  });
  
  test('Verify Common Delete button enabled after clicking on any checkbox', { tag: ['@muldel', '@all', '@tag1DeleteMultipleProgram'] }, async ({ When, Then }) => { 
    await When('Admin clicks any checkbox in the data table for programpage'); 
    await Then('Admin should see common delete option enabled under header Manage Program for programpage'); 
  });

  test('Verify multiple program deletion by selecting multiple check boxes', { tag: ['@muldel', '@all', '@tag2DeleteMultipleProgram'] }, async ({ Given, When, Then }) => { 
    await Given('Admin is on Confirm Deletion alert for programpage'); 
    await When('Admin clicks on Yes button on the alert for program'); 
    await Then('Admin should land on Manage Program page and can see the selected programs are deleted from the data table for programpage'); 
  });

  test('Verify Admin is able to click Yes', { tag: ['@muldel', '@all', '@tag3DeleteMultipleProgram'] }, async ({ Given, When, Then }) => { 
    await Given('Admin is on Confirm deletion alert for program'); 
    await When('Admin clicks on Yes button on the alert for program'); 
    await Then('Admin can see alert message "Successful Program Deleted"'); 
  });

  test('Verify Admin is able to click <No>', { tag: ['@muldel', '@all', '@tag4DeleteMultipleProgram'] }, async ({ Given, When, Then }) => { 
    await Given('Admin is on Confirm deletion alert for program'); 
    await When('Admin clicks on <No> button on the alert for program'); 
    await Then('Admin can see the deletion alert disappears without deleting for program'); 
  });

  test('Verify Admin is able to close the window with <X>', { tag: ['@muldel', '@all', '@tag5DeleteMultipleProgram'] }, async ({ Given, When, Then }) => { 
    await Given('Admin is on Confirm deletion alert for program'); 
    await When('Admin Click on <X> button on the alert for program'); 
    await Then('Admin can see Confirm Deletion form disappear'); 
  });

  test('Verify Admin is able to search for a deleted program', { tag: ['@muldel', '@all', '@tag6DeleteMultipleProgram'] }, async ({ When, Then }) => { 
    await When('Admin Searches for "XYZ" Deleted Program name'); 
    await Then('There should be zero results'); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\03_05_DeleteMultipleProgram.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":9,"tags":["@muldel","@all","@tag1DeleteMultipleProgram"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When Admin clicks any checkbox in the data table for programpage","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Admin should see common delete option enabled under header Manage Program for programpage","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":["@muldel","@all","@tag2DeleteMultipleProgram"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given Admin is on Confirm Deletion alert for programpage","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When Admin clicks on Yes button on the alert for program","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on Manage Program page and can see the selected programs are deleted from the data table for programpage","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":20,"tags":["@muldel","@all","@tag3DeleteMultipleProgram"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given Admin is on Confirm deletion alert for program","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When Admin clicks on Yes button on the alert for program","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then Admin can see alert message \"Successful Program Deleted\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Successful Program Deleted\"","children":[{"start":29,"value":"Successful Program Deleted","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":26,"tags":["@muldel","@all","@tag4DeleteMultipleProgram"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given Admin is on Confirm deletion alert for program","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When Admin clicks on <No> button on the alert for program","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the deletion alert disappears without deleting for program","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":32,"tags":["@muldel","@all","@tag5DeleteMultipleProgram"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":33,"keywordType":"Context","textWithKeyword":"Given Admin is on Confirm deletion alert for program","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When Admin Click on <X> button on the alert for program","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then Admin can see Confirm Deletion form disappear","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":38,"tags":["@muldel","@all","@tag6DeleteMultipleProgram"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When Admin Searches for \"XYZ\" Deleted Program name","stepMatchArguments":[{"group":{"start":19,"value":"\"XYZ\"","children":[{"start":20,"value":"XYZ","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then There should be zero results","stepMatchArguments":[]}]},
]; // bdd-data-end