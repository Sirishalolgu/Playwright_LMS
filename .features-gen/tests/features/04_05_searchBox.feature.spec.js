// Generated from: tests\features\04_05_searchBox.feature
import { test } from "playwright-bdd";

test.describe('Search box', () => {

  test.beforeEach('Background: Admin is logged in to LMS Portal', async ({ Given, page, When }) => {
    await Given('Admin is on dashboard page after Login', null, { page }); 
    await When('Admin clicks the Class Navigation bar in the Header', null, { page }); 
  });
  
  test('Search class by Batch Name', async ({ When, page, Then }) => { 
    await When('Admin enter the Batch Name in search textbox', null, { page }); 
    await Then('Admin should see Class details are searched by Batch Name'); 
  });

  test('Search class by Class topic', async ({ When, page, Then }) => { 
    await When('Admin enter the Class topic in search textbox', null, { page }); 
    await Then('Admin should see Class details are searched by Class topic'); 
  });

  test('', async ({ When, page, Then }) => { 
    await When('Admin enter the Staff Name in search textbox', null, { page }); 
    await Then('Admin should see Class details are searched by Staff name'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\04_05_searchBox.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When Admin enter the Batch Name in search textbox","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Class details are searched by Batch Name","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When Admin enter the Class topic in search textbox","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Class details are searched by Class topic","stepMatchArguments":[]}]},
  {"pwTestLine":21,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When Admin enter the Staff Name in search textbox","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Class details are searched by Staff name","stepMatchArguments":[]}]},
]; // bdd-data-end