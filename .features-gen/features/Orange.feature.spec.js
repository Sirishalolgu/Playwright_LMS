// Generated from: features\Orange.feature
import { test } from "playwright-bdd";

test.describe('User Login', () => {

  test('Validating Login with valid credentials', async ({ Given, page, When, And, Then }) => { 
    await Given('User is on Login Page', null, { page }); 
    await When('User enters valid Username into Username field'); 
    await And('User enters valid password into password field'); 
    await And('User clicks on Login button'); 
    await Then('User should Login successfully'); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\Orange.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Login Page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User enters valid Username into Username field","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And User enters valid password into password field","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And User clicks on Login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then User should Login successfully","stepMatchArguments":[]}]},
]; // bdd-data-end