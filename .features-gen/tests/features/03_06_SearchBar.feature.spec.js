// Generated from: tests\features\03_06_SearchBar.feature
import { test } from "playwright-bdd";

test.describe('ProgramPage search_Bar', () => {

  test.beforeEach('Background: Admin is on program module after reaching dashboard', async ({ Given, page, When }) => {
    await Given('Admin is on dashboard page after Login', null, { page }); 
    await When('Admin clicks Program on the navigation bar', null, { page }); 
  });
  
  test('Verify Admin is able to search results found for program name', { tag: ['@prosearch', '@all', '@tag1ProgramPagesearch_Bar'] }, async ({ When, Then }) => { 
    await When('Admin enter the program to search By program name'); 
    await Then('Admin should able to see Program name description and status for searched program name'); 
  });

  test('Verify Admin is able to search results found for program description', { tag: ['@prosearch', '@all', '@tag2ProgramPagesearch_Bar'] }, async ({ When, Then }) => { 
    await When('Admin enter the program to search By program description'); 
    await Then('Admin should able to see Program name description and status for searched program description'); 
  });

  test('Verify Admin is able to search results not found', { tag: ['@prosearch', '@all', '@tag3ProgramPagesearch_Bar'] }, async ({ When, Then }) => { 
    await When('Admin enter the program to search By program name that does not exist'); 
    await Then('There should be zero results'); 
  });

  test('Verify Admin is able to search with partial program name', { tag: ['@prosearch', '@all', '@tag4ProgramPagesearch_Bar'] }, async ({ When, Then }) => { 
    await When('Admin enter the program to search By partial name of program'); 
    await Then('Admin should able to see Program name description and status for searched program name'); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\03_06_SearchBar.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":9,"tags":["@prosearch","@all","@tag1ProgramPagesearch_Bar"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When Admin enter the program to search By program name","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Admin should able to see Program name description and status for searched program name","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":["@prosearch","@all","@tag2ProgramPagesearch_Bar"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When Admin enter the program to search By program description","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then Admin should able to see Program name description and status for searched program description","stepMatchArguments":[]}]},
  {"pwTestLine":21,"pickleLine":19,"tags":["@prosearch","@all","@tag3ProgramPagesearch_Bar"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When Admin enter the program to search By program name that does not exist","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then There should be zero results","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":24,"tags":["@prosearch","@all","@tag4ProgramPagesearch_Bar"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When Admin enter the program to search By partial name of program","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then Admin should able to see Program name description and status for searched program name","stepMatchArguments":[]}]},
]; // bdd-data-end