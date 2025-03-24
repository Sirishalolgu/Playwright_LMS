// Generated from: features\deleteBatch.feature
import { test } from "playwright-bdd";

test.describe('Delete batch validation', () => {

  test.beforeEach('Background: Admin is on the batch page', async ({ Given, page }) => {
    await Given('Admin is on batch page', null, { page }); 
  });
  
  test('Validate delete Icon on any row', { tag: ['@batch'] }, async ({ When, Then }) => { 
    await When('Admin clicks the delete Icon on any row'); 
    await Then('Admin should see the confirm alert box with yes and no button'); 
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
  {"pwTestLine":10,"pickleLine":7,"tags":["@batch"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on batch page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When Admin clicks the delete Icon on any row","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the confirm alert box with yes and no button","stepMatchArguments":[]}]},
]; // bdd-data-end