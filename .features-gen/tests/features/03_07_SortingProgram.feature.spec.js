// Generated from: tests\features\03_07_SortingProgram.feature
import { test } from "playwright-bdd";

test.describe('Sorting Program', () => {

  test.beforeEach('Background: Admin is on program module after reaching dashboard', async ({ Given, page, When }) => {
    await Given('Admin is on dashboard page after Login', null, { page }); 
    await When('Admin clicks Program on the navigation bar', null, { page }); 
  });
  
  test('Verify sorting of  Program name in Ascending or Descending order', { tag: ['@prosort', '@all', '@tag1SortingProgram'] }, async ({ When, Then }) => { 
    await When('Admin clicks on Arrow next to program Name'); 
    await Then('Admin See the Program Name is sorted in Ascending or Descending order'); 
  });

  test('Verify sorting of Program Description in Ascending or Descending order', { tag: ['@prosort', '@all', '@tag2SortingProgram'] }, async ({ When, Then }) => { 
    await When('Admin clicks on Arrow next to Program Description'); 
    await Then('Admin See the program Description is sorted in Ascending or Descending order'); 
  });

  test('Verify sorting of Program status in Ascending or Descending order', { tag: ['@prosort', '@all', '@tag3SortingProgram'] }, async ({ When, Then }) => { 
    await When('Admin clicks on Arrow next to Program status'); 
    await Then('Admin See the Program Status is sorted in Ascending or Descending order'); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\03_07_SortingProgram.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":9,"tags":["@prosort","@all","@tag1SortingProgram"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When Admin clicks on Arrow next to program Name","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Admin See the Program Name is sorted in Ascending or Descending order","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":["@prosort","@all","@tag2SortingProgram"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When Admin clicks on Arrow next to Program Description","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then Admin See the program Description is sorted in Ascending or Descending order","stepMatchArguments":[]}]},
  {"pwTestLine":21,"pickleLine":19,"tags":["@prosort","@all","@tag3SortingProgram"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When Admin clicks on Arrow next to Program status","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then Admin See the Program Status is sorted in Ascending or Descending order","stepMatchArguments":[]}]},
]; // bdd-data-end