// Generated from: features\loginLMS.feature
import { test } from "playwright-bdd";

test.describe('Login Page', () => {

  test.beforeEach('Background', async ({ Given, browser }) => {
    await Given('The browser is open', null, { browser }); 
  });
  
  test('Verify text on the first field', { tag: ['@spellcheck'] }, async ({ Given, Then, page }) => { 
    await Given('Admin gives the correct LMS portal URL'); 
    await Then('Admin should see "User" in the first text field', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\loginLMS.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":41,"tags":["@spellcheck"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"Given Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then Admin should see \"User\" in the first text field","stepMatchArguments":[{"group":{"start":17,"value":"\"User\"","children":[{"start":18,"value":"User","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end