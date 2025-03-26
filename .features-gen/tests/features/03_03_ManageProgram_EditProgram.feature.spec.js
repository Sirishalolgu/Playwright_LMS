// Generated from: tests\features\03_03_ManageProgram_EditProgram.feature
import { test } from "playwright-bdd";

test.describe('Manage Program - Edit Program', () => {

  test.beforeEach('Background: Admin is on program module after reaching dashboard', async ({ Given, page, When }) => {
    await Given('Admin is on dashboard page after Login', null, { page }); 
    await When('Admin clicks Program on the navigation bar', null, { page }); 
  });
  
  test('Verify Edit option', { tag: ['@verifyEditoption'] }, async ({ When, Then }) => { 
    await When('Admin clicks on Edit option for particular program'); 
    await Then('Admin should see pop up window for program details'); 
  });

  test('Verify title of the pop up window', async ({ When, Then }) => { 
    await When('Admin clicks on Edit option for particular program'); 
    await Then('Admin should see window title as "Program Details"'); 
  });

  test('Verify mandatory fields with red "*" mark', async ({ When, Then }) => { 
    await When('Admin clicks on Edit option for particular program'); 
    await Then('Admin should see red "*" mark beside mandatory field "Name"'); 
  });

  test('Verify edit Program Name', { tag: ['@verifyEditprogram'] }, async ({ When, Then }) => { 
    await When('Admin edits the program name and click on save button'); 
    await Then('Updated program name is seen by the Admin'); 
  });

  test('Verify edit Description', { tag: ['@verifyEditdescription'] }, async ({ When, Then }) => { 
    await When('Admin edits the description text and click on save button'); 
    await Then('Admin can see the description is updated'); 
  });

  test('Verify edit Status', { tag: ['@verifystatusedit'] }, async ({ When, Then }) => { 
    await When('Admin can change the status of the program and click on save button'); 
    await Then('Status updated can be viewed by the Admin'); 
  });

  test('Verify Admin is able to click Cancel', { tag: ['@verifycancelbuttonclick'] }, async ({ When, Then }) => { 
    await When('Admin click on cancel button'); 
    await Then('Admin can see the Program details form disappears'); 
  });

  test('Verify edited Program details', { tag: ['@searchEditedDetails'] }, async ({ When, Then }) => { 
    await When('Admin searches with newly updated "Program Name"'); 
    await Then('Admin verifies that the details are correctly updated'); 
  });

  test('Verify close the window with "X"', async ({ When, Then }) => { 
    await When('Admin Click on "X" button on Program Details'); 
    await Then('Admin can see the Program details form disappears'); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\03_03_ManageProgram_EditProgram.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":8,"tags":["@verifyEditoption"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When Admin clicks on Edit option for particular program","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then Admin should see pop up window for program details","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When Admin clicks on Edit option for particular program","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Admin should see window title as \"Program Details\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Program Details\"","children":[{"start":34,"value":"Program Details","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":21,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When Admin clicks on Edit option for particular program","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Admin should see red \"*\" mark beside mandatory field \"Name\"","stepMatchArguments":[{"group":{"start":21,"value":"\"*\"","children":[{"start":22,"value":"*","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":53,"value":"\"Name\"","children":[{"start":54,"value":"Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":21,"tags":["@verifyEditprogram"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When Admin edits the program name and click on save button","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then Updated program name is seen by the Admin","stepMatchArguments":[]}]},
  {"pwTestLine":31,"pickleLine":27,"tags":["@verifyEditdescription"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When Admin edits the description text and click on save button","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the description is updated","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":32,"tags":["@verifystatusedit"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When Admin can change the status of the program and click on save button","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then Status updated can be viewed by the Admin","stepMatchArguments":[]}]},
  {"pwTestLine":41,"pickleLine":37,"tags":["@verifycancelbuttonclick"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When Admin click on cancel button","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the Program details form disappears","stepMatchArguments":[]}]},
  {"pwTestLine":46,"pickleLine":42,"tags":["@searchEditedDetails"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When Admin searches with newly updated \"Program Name\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Program Name\"","children":[{"start":35,"value":"Program Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":48,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then Admin verifies that the details are correctly updated","stepMatchArguments":[]}]},
  {"pwTestLine":51,"pickleLine":46,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When Admin Click on \"X\" button on Program Details","stepMatchArguments":[{"group":{"start":15,"value":"\"X\"","children":[{"start":16,"value":"X","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":53,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the Program details form disappears","stepMatchArguments":[]}]},
]; // bdd-data-end