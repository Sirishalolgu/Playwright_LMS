// Generated from: tests\features\03_8_Pagination.feature
import { test } from "playwright-bdd";

test.describe('ManageProgram_Pagination', () => {

  test.beforeEach('Background: Admin is on program module after reaching dashboard', async ({ Given, page, When }) => {
    await Given('Admin is on dashboard page after Login', null, { page }); 
    await When('Admin clicks Program on the navigation bar', null, { page }); 
  });
  
  test('Verify Admin is able to click Next page link', { tag: ['@propagi', '@all', '@tag1ManageProgramPagination'] }, async ({ When, Then }) => { 
    await When('Admin clicks Next page link on the program table'); 
    await Then('Admin should see the Pagination has Next active link'); 
  });

  test('Verify Admin is able to click  Last page link', { tag: ['@propagi', '@all', '@tag2ManageProgramPagination'] }, async ({ When, Then }) => { 
    await When('Admin clicks Last page link'); 
    await Then('Admin should see the last page record on the table with Next page link are disabled'); 
  });

  test('Verify Admin is able to click Previous page link', { tag: ['@propagi', '@all', '@tag3ManageProgramPagination'] }, async ({ Given, When, Then }) => { 
    await Given('Admin is on last page of Program module table'); 
    await When('Admin clicks Previous page link'); 
    await Then('Admin should see the previous page record on the table with pagination has previous page link'); 
  });

  test('Verify Admin is able to click  First page link', { tag: ['@propagi', '@all', '@tag4ManageProgramPagination'] }, async ({ Given, When, Then }) => { 
    await Given('Admin is on Previous Program page'); 
    await When('Admin clicks First page link'); 
    await Then('Admin should see the very first page record on the table with Previous page link are disabled'); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\03_8_Pagination.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":9,"tags":["@propagi","@all","@tag1ManageProgramPagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When Admin clicks Next page link on the program table","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Pagination has Next active link","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":["@propagi","@all","@tag2ManageProgramPagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When Admin clicks Last page link","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the last page record on the table with Next page link are disabled","stepMatchArguments":[]}]},
  {"pwTestLine":21,"pickleLine":19,"tags":["@propagi","@all","@tag3ManageProgramPagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given Admin is on last page of Program module table","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When Admin clicks Previous page link","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the previous page record on the table with pagination has previous page link","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":25,"tags":["@propagi","@all","@tag4ManageProgramPagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given Admin is on Previous Program page","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When Admin clicks First page link","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the very first page record on the table with Previous page link are disabled","stepMatchArguments":[]}]},
]; // bdd-data-end