// Generated from: tests\features\03_02_Menubar_Progran_AddNewProgram.feature
import { test } from "playwright-bdd";

test.describe('Menu bar - Program - Add New Program', () => {

  test.beforeEach('Background: Admin is on program module after reaching dashboard', async ({ Given, page, When }) => {
    await Given('Admin is on dashboard page after Login', null, { page }); 
    await When('Admin clicks Program on the navigation bar', null, { page }); 
    await When('Admin clicks on "New Program" under the "Program" menu bar'); 
  });
  
  test('Verify add New Program', { tag: ['@addNewProgramPopUp'] }, async ({ Then }) => { 
    await Then('Admin should see pop up window for program details'); 
  });

  test('Verify title of the pop up window', { tag: ['@verifypopUpTitle'] }, async ({ Then }) => { 
    await Then('Admin should see window title as "Program Details"'); 
  });

  test('Verify mandatory fields with red "*" mark', { tag: ['@verifyMandatoryfield'] }, async ({ Then }) => { 
    await Then('Admin should see red "*" mark beside mandatory field "Name"'); 
  });

  test('Verify empty form submission', { tag: ['@verifySaveWithoutData'] }, async ({ When, Then }) => { 
    await When('Admin clicks save button without entering mandatory'); 
    await Then('Admin gets message \'<field> is required\''); 
  });

  test('Verify cancel button', { tag: ['@verifyCancelButton'] }, async ({ When, Then }) => { 
    await When('Admin clicks Cancel button'); 
    await Then('Admin can see Program Details form disappears'); 
  });

  test('Verify select Status', { tag: ['@verifyselectstatus'] }, async ({ When, Then }) => { 
    await When('Admin selects the status of the program by clicking on the radio button "Active"'); 
    await Then('Admin can see \'Active\' status selected'); 
  });

  test.describe('Verify Admin is able to save the program details', () => {

    test('Example #1', { tag: ['@verifySavedetails'] }, async ({ When, Then }) => { 
      await When('Admin enters mandatory details using "ValidProgramDetails" in the text box'); 
      await Then('Admin gets success message'); 
    });

  });

  test('Verify cancel program details', { tag: ['@verifyCancelprogramdetails'] }, async ({ When, Then }) => { 
    await When('Admin Click on cancel button'); 
    await Then('Admin can see Program Details form disappears'); 
  });

  test('Verify close window with "X"', { tag: ['@verifyclosewindow'] }, async ({ When, Then }) => { 
    await When('Admin Click on "X" button'); 
    await Then('Admin can see Program Details form disappears'); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\03_02_Menubar_Progran_AddNewProgram.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":9,"tags":["@addNewProgramPopUp"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"New Program\" under the \"Program\" menu bar","isBg":true,"stepMatchArguments":[{"group":{"start":16,"value":"\"New Program\"","children":[{"start":17,"value":"New Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":40,"value":"\"Program\"","children":[{"start":41,"value":"Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Admin should see pop up window for program details","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":["@verifypopUpTitle"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"New Program\" under the \"Program\" menu bar","isBg":true,"stepMatchArguments":[{"group":{"start":16,"value":"\"New Program\"","children":[{"start":17,"value":"New Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":40,"value":"\"Program\"","children":[{"start":41,"value":"Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then Admin should see window title as \"Program Details\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Program Details\"","children":[{"start":34,"value":"Program Details","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":19,"tags":["@verifyMandatoryfield"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"New Program\" under the \"Program\" menu bar","isBg":true,"stepMatchArguments":[{"group":{"start":16,"value":"\"New Program\"","children":[{"start":17,"value":"New Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":40,"value":"\"Program\"","children":[{"start":41,"value":"Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then Admin should see red \"*\" mark beside mandatory field \"Name\"","stepMatchArguments":[{"group":{"start":21,"value":"\"*\"","children":[{"start":22,"value":"*","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":53,"value":"\"Name\"","children":[{"start":54,"value":"Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":24,"tags":["@verifySaveWithoutData"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"New Program\" under the \"Program\" menu bar","isBg":true,"stepMatchArguments":[{"group":{"start":16,"value":"\"New Program\"","children":[{"start":17,"value":"New Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":40,"value":"\"Program\"","children":[{"start":41,"value":"Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When Admin clicks save button without entering mandatory","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message '<field> is required'","stepMatchArguments":[{"group":{"start":19,"value":"'<field> is required'","children":[{"children":[{"children":[]}]},{"start":20,"value":"<field> is required","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":29,"pickleLine":29,"tags":["@verifyCancelButton"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"New Program\" under the \"Program\" menu bar","isBg":true,"stepMatchArguments":[{"group":{"start":16,"value":"\"New Program\"","children":[{"start":17,"value":"New Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":40,"value":"\"Program\"","children":[{"start":41,"value":"Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When Admin clicks Cancel button","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then Admin can see Program Details form disappears","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":37,"tags":["@verifyselectstatus"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"New Program\" under the \"Program\" menu bar","isBg":true,"stepMatchArguments":[{"group":{"start":16,"value":"\"New Program\"","children":[{"start":17,"value":"New Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":40,"value":"\"Program\"","children":[{"start":41,"value":"Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When Admin selects the status of the program by clicking on the radio button \"Active\"","stepMatchArguments":[{"group":{"start":72,"value":"\"Active\"","children":[{"start":73,"value":"Active","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then Admin can see 'Active' status selected","stepMatchArguments":[{"group":{"start":14,"value":"'Active'","children":[{"children":[{"children":[]}]},{"start":15,"value":"Active","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":41,"pickleLine":48,"tags":["@verifySavedetails"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"New Program\" under the \"Program\" menu bar","isBg":true,"stepMatchArguments":[{"group":{"start":16,"value":"\"New Program\"","children":[{"start":17,"value":"New Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":40,"value":"\"Program\"","children":[{"start":41,"value":"Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When Admin enters mandatory details using \"ValidProgramDetails\" in the text box","stepMatchArguments":[{"group":{"start":37,"value":"\"ValidProgramDetails\"","children":[{"start":38,"value":"ValidProgramDetails","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then Admin gets success message","stepMatchArguments":[]}]},
  {"pwTestLine":48,"pickleLine":51,"tags":["@verifyCancelprogramdetails"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"New Program\" under the \"Program\" menu bar","isBg":true,"stepMatchArguments":[{"group":{"start":16,"value":"\"New Program\"","children":[{"start":17,"value":"New Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":40,"value":"\"Program\"","children":[{"start":41,"value":"Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":49,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When Admin Click on cancel button","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Admin can see Program Details form disappears","stepMatchArguments":[]}]},
  {"pwTestLine":53,"pickleLine":56,"tags":["@verifyclosewindow"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on dashboard page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks Program on the navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"New Program\" under the \"Program\" menu bar","isBg":true,"stepMatchArguments":[{"group":{"start":16,"value":"\"New Program\"","children":[{"start":17,"value":"New Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":40,"value":"\"Program\"","children":[{"start":41,"value":"Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":54,"gherkinStepLine":57,"keywordType":"Action","textWithKeyword":"When Admin Click on \"X\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"X\"","children":[{"start":16,"value":"X","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":55,"gherkinStepLine":58,"keywordType":"Outcome","textWithKeyword":"Then Admin can see Program Details form disappears","stepMatchArguments":[]}]},
]; // bdd-data-end