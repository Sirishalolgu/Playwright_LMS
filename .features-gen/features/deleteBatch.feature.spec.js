// Generated from: features\deleteBatch.feature
import { test } from "playwright-bdd";

test.describe('Delete batch validation', () => {

  test.beforeEach('Background: Admin is on the batch page', async ({ Given, page }) => {
    await Given('Admin is on batch page', null, { page }); 
  });
  
  test('Validate close Icon on the alert box', { tag: ['@batch'] }, async ({ Given, When, Then }) => { 
    await Given('Admin is on the batch confirm popup page'); 
    await When('Admin clicks on the close icon'); 
    await Then('Admin should see the alert box closed'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});
test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\deleteBatch.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":21,"tags":["@batch"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on batch page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch confirm popup page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When Admin clicks on the close icon","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the alert box closed","stepMatchArguments":[]}]},
]; // bdd-data-end