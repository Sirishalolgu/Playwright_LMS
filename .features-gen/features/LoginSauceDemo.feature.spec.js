// Generated from: features\LoginSauceDemo.feature
import { test } from "playwright-bdd";

test.describe('Login to SauceDemo', () => {

  test('Successful login', async ({ Given, page, When, Then }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('I enter username "standard_user" and password "secret_sauce"', null, { page }); 
    await Then('I should be logged in successfully', null, { page }); 
  });

  test('Unsuccessful login with incorrect credentials', async ({ Given, page, When, Then }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('I enter username "invalid_user" and password "wrong_password"', null, { page }); 
    await Then('I should see a login error', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\LoginSauceDemo.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I enter username \"standard_user\" and password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":17,"value":"\"standard_user\"","children":[{"start":18,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":46,"value":"\"secret_sauce\"","children":[{"start":47,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should be logged in successfully","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I enter username \"invalid_user\" and password \"wrong_password\"","stepMatchArguments":[{"group":{"start":17,"value":"\"invalid_user\"","children":[{"start":18,"value":"invalid_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":45,"value":"\"wrong_password\"","children":[{"start":46,"value":"wrong_password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then I should see a login error","stepMatchArguments":[]}]},
]; // bdd-data-end