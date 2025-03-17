// Generated from: tests\features\03_01_Navigation_MenuBar_ManageProgramPageValidation.feature
import { test } from "playwright-bdd";

test.describe('Navigation', () => {

  test.beforeEach('Background: Admin is logged in to LMS Portal', async ({ Given, page, When }) => {
    await Given('Admin is on dashboard page after Login', null, { page }); 
    await When('Admin clicks Program on the navigation bar', null, { page }); 
  });
  
  test('Verify that Admin is able to navigate to Program module', { tag: ['@NavigationCheck'] }, async ({ Then, page }) => { 
    await Then('Admin should be navigated to Program module', null, { page }); 
  });

  test('Verify any broken links on program page', { tag: ['@BrokenLinks'] }, async ({ Then, page }) => { 
    await Then('Admin should not have any broken links for Program module', null, { page }); 
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
  {"pwTestLine":15,"pickleLine":12,"tags":["@BrokenLinks"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then Admin should not have any broken links for Program module","stepMatchArguments":[]}]},
]; // bdd-data-end