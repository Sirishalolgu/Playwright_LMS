// Generated from: tests\features\03_04_DeleteProgram.feature
import { test } from "playwright-bdd";

test.describe('Delete Program', () => {

  test.beforeEach('Background: Admin is on program module after reaching dashboard', async ({ Given, page, When }) => {
    await Given('Admin is on dashboard page after Login', null, { page }); 
    await When('Admin clicks Program on the navigation bar', null, { page }); 
  });
  
  test('Verify delete feature', { tag: ['@Delpro', '@all', '@tag1DeleteProgram'] }, async ({ When, Then }) => { 
    await When('Admin clicks on delete button for a program'); 
    await Then('Admin will get confirm deletion popup and able to see the "Confirm" text'); 
  });

  test('Verify Admin is able to click Yes', { tag: ['@Delpro', '@all', '@tag2DeleteProgram'] }, async ({ Given, When, Then }) => { 
    await Given('Admin is on Confirm deletion alert for program'); 
    await When('Admin clicks on Yes button on the alert for program'); 
    await Then('Admin can see alert message "Program Deleted"'); 
  });

  test('Verify Admin is able to click <No>', { tag: ['@Delpro', '@all', '@tag3DeleteProgram'] }, async ({ Given, When, Then }) => { 
    await Given('Admin is on Confirm deletion alert for program'); 
    await When('Admin clicks on <No> button on the alert for program'); 
    await Then('Admin can see the deletion alert disappears without deleting for program'); 
  });

  test('Verify Admin is able to close the window with <X>', { tag: ['@Delpro', '@all', '@tag4DeleteProgram'] }, async ({ Given, When, Then }) => { 
    await Given('Admin is on Confirm deletion alert for program'); 
    await When('Admin Click on <X> button on the alert for program'); 
    await Then('Admin can see Confirm Deletion form disappear'); 
  });

  test('Verify Admin is able to search for a deleted program', { tag: ['@Delpro', '@all', '@tag5DeleteProgram'] }, async ({ When, Then }) => { 
    await When('Admin Searches for "XYZ" Deleted Program name'); 
    await Then('There should be zero results'); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\03_04_DeleteProgram.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":9,"tags":["@Delpro","@all","@tag1DeleteProgram"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When Admin clicks on delete button for a program","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Admin will get confirm deletion popup and able to see the \"Confirm\" text","stepMatchArguments":[{"group":{"start":58,"value":"\"Confirm\"","children":[{"start":59,"value":"Confirm","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":["@Delpro","@all","@tag2DeleteProgram"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given Admin is on Confirm deletion alert for program","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When Admin clicks on Yes button on the alert for program","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then Admin can see alert message \"Program Deleted\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Program Deleted\"","children":[{"start":29,"value":"Program Deleted","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":20,"tags":["@Delpro","@all","@tag3DeleteProgram"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given Admin is on Confirm deletion alert for program","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When Admin clicks on <No> button on the alert for program","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the deletion alert disappears without deleting for program","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":26,"tags":["@Delpro","@all","@tag4DeleteProgram"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given Admin is on Confirm deletion alert for program","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When Admin Click on <X> button on the alert for program","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then Admin can see Confirm Deletion form disappear","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":32,"tags":["@Delpro","@all","@tag5DeleteProgram"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When Admin Searches for \"XYZ\" Deleted Program name","stepMatchArguments":[{"group":{"start":19,"value":"\"XYZ\"","children":[{"start":20,"value":"XYZ","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then There should be zero results","stepMatchArguments":[]}]},
]; // bdd-data-end