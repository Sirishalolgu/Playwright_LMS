// Generated from: features\loginLMS.feature
import { test } from "playwright-bdd";

test.describe('Login Page', () => {

  test.beforeEach('Background', async ({ Given, browser }) => {
    await Given('The browser is open', null, { browser }); 
  });
  
  test('Login Page Verification', async ({ Given, Then }) => { 
    await Given('Admin gives the correct LMS portal URL'); 
    await Then('Admin should land on the login page'); 
  });

  test('Verify Admin is able to land on home page with invalid URL', async ({ Given, Then }) => { 
    await Given('Admin gives the invalid LMS portal URL'); 
    await Then('Admin should receive application error'); 
  });

  test('Verify for broken link', async ({ Given, Then }) => { 
    await Given('Admin gives the correct LMS portal URL'); 
    await Then('HTTP response >= 400. Then the link is broken'); 
  });

  test('Verify application name', async ({ Given, Then }) => { 
    await Given('Admin gives the correct LMS portal URL'); 
    await Then('Admin should see LMS - Learning Management System'); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\loginLMS.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the login page","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given Admin gives the invalid LMS portal URL","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Admin should receive application error","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then HTTP response >= 400. Then the link is broken","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Admin should see LMS - Learning Management System","stepMatchArguments":[]}]},
]; // bdd-data-end