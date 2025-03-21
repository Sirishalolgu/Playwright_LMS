// Generated from: features\addNewBatchDetails.feature
import { test } from "playwright-bdd";

test.describe('Add New Batch details pop up', () => {

  test.beforeEach('Background: Admin is on the Add new batch pop up', async ({ Given, page, When, Then }) => {
    await Given('Admin is on batch page', null, { page }); 
    await When('Admin clicks on "Add New batch" under the "batch" menu bar'); 
    await Then('Admin should see the Batch Details pop up window'); 
  });
  
  test('Validate batch name prefix box is not editable', { tag: ['@batch'] }, async ({ Given, When, Then }) => { 
    await Given('Admin is on the Batch Details Pop Up Window'); 
    await When('Admin enters alphabets in batch name prefix box'); 
    await Then('Admin should see empty text box'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});
test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\addNewBatchDetails.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":24,"tags":["@batch"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on batch page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"Add New batch\" under the \"batch\" menu bar","isBg":true,"stepMatchArguments":[{"group":{"start":16,"value":"\"Add New batch\"","children":[{"start":17,"value":"Add New batch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":42,"value":"\"batch\"","children":[{"start":43,"value":"batch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Batch Details pop up window","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up Window","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When Admin enters alphabets in batch name prefix box","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then Admin should see empty text box","stepMatchArguments":[]}]},
]; // bdd-data-end