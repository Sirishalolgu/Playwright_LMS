// Generated from: features\batch.feature
import { test } from "playwright-bdd";

test.describe('Batch Page Navigation', () => {

  test.beforeEach('Background: Admin successfully logged on to the LMS Portal', async ({ Given }) => {
    await Given('Admin is on the home Page'); 
  });
  
  test('Verify Admin navigates to Batch page successfully', { tag: ['@batch'] }, async ({ When, Then }) => { 
    await When('Admin clicks on the "Batch" menu from the header'); 
    await Then('Admin should be in the Manage "Batch" Page'); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\batch.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@batch"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When Admin clicks on the \"Batch\" menu from the header","stepMatchArguments":[{"group":{"start":20,"value":"\"Batch\"","children":[{"start":21,"value":"Batch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Admin should be in the Manage \"Batch\" Page","stepMatchArguments":[{"group":{"start":30,"value":"\"Batch\"","children":[{"start":31,"value":"Batch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end