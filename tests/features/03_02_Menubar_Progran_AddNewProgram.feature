Feature: Menu bar - Program - Add New Program

  Background: Admin is on program module after reaching dashboard

  @addNewProgramPopUp
  Scenario: Verify add New Program
    Given Admin is on Program module
    When Admin clicks on "New Program" under the "Program" menu bar
    Then Admin should see pop up window for program details

  @verifypopUpTitle
  Scenario: Verify title of the pop up window
    Given Admin is on Program module
    When Admin clicks on "New Program" under the "Program" menu bar
    Then Admin should see window title as "Program Details"

  @verifyMandatoryfield
  Scenario: Verify mandatory fields with red "*" mark
    Given Admin is on Program module
    When Admin clicks on "New Program" under the "Program" menu bar
    Then Admin should see red "*" mark beside mandatory field "Name"

  @verifySaveWithoutData
  Scenario: Verify empty form submission
    Given Admin is on Program details form
    When Admin clicks save button without entering mandatory
    Then Admin gets message '<field> is required'

  @verifyCancelButton
  Scenario: Verify cancel button
    Given Admin is on Program details form
    When Admin clicks Cancel button
    Then Admin can see Program Details form disappears

 

  @verifyselectstatus
  Scenario: Verify select Status
    Given Admin is on Program details form
    When Admin selects the status of the program by clicking on the radio button "Active"
    Then Admin can see 'Active' status selected

  @verifySavedetails
  Scenario Outline: Verify Admin is able to save the program details
    Given Admin is on Program details form
    When Admin enters mandatory details using "<TestCaseName>" in the text box
   Then Admin gets success message 

    Examples: 
      | TestCaseName        |
      | ValidProgramDetails |

  @verifyCancelprogramdetails
  Scenario: Verify cancel program details
    Given Admin is on Program details form
    When Admin Click on cancel button
    Then Admin can see program details form disappear

  @verifyclosewindow
  Scenario: Verify close window with "X"
    Given Admin is on Program details form
    When Admin Click on "X" button
    Then Admin can see program details form disappear