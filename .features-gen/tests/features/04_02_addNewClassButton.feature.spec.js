// Generated from: tests\features\04_02_addNewClassButton.feature
import { test } from "playwright-bdd";

test.describe('validating addNewclass button', () => {

  test.beforeEach('Background: Admin is on the Manage class page after clicking class on navigation bar header', async ({ Given, page, When }) => {
    await Given('Admin is on dashboard page after Login', null, { page }); 
    await When('Admin clicks the Class Navigation bar in the Header and clicks the addNewClass', null, { page }); 
  });
  
  test('Validate Class Details Popup window', { tag: ['@classDetailPopup'] }, async ({ Then, page }) => { 
    await Then('Admin should see a popup open for class details with empty form along with <SAVE> and <CANCEL> button', null, { page }); 
  });

  test('Validate input fields and their text boxes in Class details form', { tag: ['@inputfieldsValidation'] }, async ({ Then, page }) => { 
    await Then('Admin should see few input fields and their respective text boxes in the class details window', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\04_02_addNewClassButton.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":10,"tags":["@classDetailPopup"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header and clicks the addNewClass","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Admin should see a popup open for class details with empty form along with <SAVE> and <CANCEL> button","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":14,"tags":["@inputfieldsValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header and clicks the addNewClass","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then Admin should see few input fields and their respective text boxes in the class details window","stepMatchArguments":[]}]},
]; // bdd-data-end