Feature: Manage Program - Edit Program

  Background: Admin is on program module after reaching dashboard
  Given Admin is on dashboard page after Login
    When Admin clicks Program on the navigation bar
   
@verifyEditoption
  Scenario: Verify Edit option
    When Admin clicks on Edit option for particular program
    Then Admin should see pop up window for program details

  Scenario: Verify title of the pop up window
    When Admin clicks on Edit option for particular program
    Then Admin should see window title as "Program Details"

  Scenario: Verify mandatory fields with red "*" mark
    When Admin clicks on Edit option for particular program
    Then Admin should see red "*" mark beside mandatory field "Name"

@verifyEditprogram
  Scenario: Verify edit Program Name
    When Admin edits the program name and click on save button
    Then Updated program name is seen by the Admin


@verifyEditdescription
  Scenario: Verify edit Description
    When Admin edits the description text and click on save button
    Then Admin can see the description is updated

@verifystatusedit
  Scenario: Verify edit Status
    When Admin can change the status of the program and click on save button
    Then Status updated can be viewed by the Admin

@verifycancelbuttonclick
  Scenario: Verify Admin is able to click Cancel
    When Admin click on cancel button
    Then Admin can see the Program details form disappears

@searchEditedDetails
  Scenario: Verify edited Program details
    When Admin searches with newly updated "Program Name"
    Then Admin verifies that the details are correctly updated

  Scenario: Verify close the window with "X"
    When Admin Click on "X" button on Program Details 
    Then Admin can see the Program details form disappears