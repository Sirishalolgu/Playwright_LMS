// Generated from: tests\features\04_03_addNewClassPopUp.feature
import { test } from "playwright-bdd";

test.describe('validating class page', () => {

  test.beforeEach('Background: Admin is logged in to LMS Portal', async ({ Given, page, When }) => {
    await Given('Admin is on dashboard page after Login', null, { page }); 
    await When('Admin clicks the Class Navigation bar in the Header and clicks the addNewClass', null, { page }); 
  });
  
  test('Validating navigation to class page', { tag: ['@New_Class_Added_With_Mandetory_Fields'] }, async ({ When, page, Then }) => { 
    await When('Admin enters mandatory fields in the form and clicks on save button', null, { page }); 
    await Then('Admin gets message Class added Successfully', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\04_03_addNewClassPopUp.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":9,"tags":["@New_Class_Added_With_Mandetory_Fields"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header and clicks the addNewClass","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When Admin enters mandatory fields in the form and clicks on save button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message Class added Successfully","stepMatchArguments":[]}]},
]; // bdd-data-end