// Generated from: tests\features\01_login.feature
import { test } from "playwright-bdd";

test.describe('verify the login', () => {

  test('login with valid credentials', async ({ Given, page, When, Then }) => { 
    await Given('Admin is on dashboard page after Login', null, { page }); 
    await When('the url is clicked'); 
    await Then('the browser opens'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\01_login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":2,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When the url is clicked","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then the browser opens","stepMatchArguments":[]}]},
]; // bdd-data-end