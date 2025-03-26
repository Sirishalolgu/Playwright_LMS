Feature: Menu bar - Program - Add New Program

  Background: Admin is on program module after reaching dashboard
   Given Admin is on dashboard page after Login
    When Admin clicks Program on the navigation bar
    When Admin clicks on "New Program" under the "Program" menu bar

  @addNewProgramPopUp
  Scenario: Verify add New Program
    # When Admin clicks on "New Program" under the "Program" menu bar
    Then Admin should see pop up window for program details

  @verifypopUpTitle
  Scenario: Verify title of the pop up window
    # When Admin clicks on "New Program" under the "Program" menu bar
    Then Admin should see window title as "Program Details"

  @verifyMandatoryfield
  Scenario: Verify mandatory fields with red "*" mark
    # When Admin clicks on "New Program" under the "Program" menu bar
    Then Admin should see red "*" mark beside mandatory field "Name"

  @verifySaveWithoutData
  Scenario: Verify empty form submission
    When Admin clicks save button without entering mandatory
    Then Admin gets message '<field> is required'

  @verifyCancelButton
  Scenario: Verify cancel button
    When Admin clicks Cancel button
    Then Admin can see Program Details form disappears

 


  @verifyselectstatus
  Scenario: Verify select Status
    When Admin selects the status of the program by clicking on the radio button "Active"
    Then Admin can see 'Active' status selected

  @verifySavedetails
  Scenario Outline: Verify Admin is able to save the program details
    When Admin enters mandatory details using "<TestCaseName>" in the text box
   Then Admin gets success message 

    Examples: 
      | TestCaseName        |
      | ValidProgramDetails |

  @verifyCancelprogramdetails
  Scenario: Verify cancel program details
    When Admin Click on cancel button
    Then Admin can see Program Details form disappears

  @verifyclosewindow
  Scenario: Verify close window with "X"
    When Admin Click on "X" button
    Then Admin can see Program Details form disappears