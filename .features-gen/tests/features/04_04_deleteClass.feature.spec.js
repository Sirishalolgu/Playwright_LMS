// Generated from: tests\features\04_04_deleteClass.feature
import { test } from "playwright-bdd";

test.describe('Delete Class', () => {

  test.beforeEach('Background: Admin is logged in to LMS Portal', async ({ Given, page, When }) => {
    await Given('Admin is on dashboard page after Login', null, { page }); 
    await When('Admin clicks the Class Navigation bar in the Header', null, { page }); 
  });
  
  test('Validate row level delete icon', async ({ When, page, Then }) => { 
    await When('Admin clicks the delete icon', null, { page }); 
    await Then('Admin should see a alert open with heading "Confirm" along with  <YES> and <NO> button for deletion', null, { page }); 
  });

  test('Click Yes on deletion window', async ({ When, page, Then }) => { 
    await When('Admin clicks yes option', null, { page }); 
    await Then('Admin gets a message "Successful Class Deleted" alert and do not see that Class in the data table', null, { page }); 
  });

  test('Click No on deletion window', async ({ When, page, Then }) => { 
    await When('Admin clicks  No option', null, { page }); 
    await Then('Admin can see the deletion alert disappears without deleting'); 
  });

  test('Validate Close(X) icon on Confirm Deletion alert', async ({ When, page, Then }) => { 
    await When('Admin clicks on close button', null, { page }); 
    await Then('Admin can see the deletion alert disappears without any changes'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\04_04_deleteClass.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When Admin clicks the delete icon","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Admin should see a alert open with heading \"Confirm\" along with  <YES> and <NO> button for deletion","stepMatchArguments":[{"group":{"start":43,"value":"\"Confirm\"","children":[{"start":44,"value":"Confirm","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When Admin clicks yes option","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then Admin gets a message \"Successful Class Deleted\" alert and do not see that Class in the data table","stepMatchArguments":[{"group":{"start":21,"value":"\"Successful Class Deleted\"","children":[{"start":22,"value":"Successful Class Deleted","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":21,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When Admin clicks  No option","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the deletion alert disappears without deleting","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When Admin clicks on close button","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the deletion alert disappears without any changes","stepMatchArguments":[]}]},
]; // bdd-data-end