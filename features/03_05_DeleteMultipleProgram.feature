@muldel @all
Feature: Delete Multiple Program

  Background: Admin is on program module after reaching dashboard
   Given Admin is on dashboard page after Login
    When Admin clicks Program on the navigation bar
  
  @tag1DeleteMultipleProgram
  Scenario: Verify Common Delete button enabled after clicking on any checkbox
    When Admin clicks any checkbox in the data table for programpage
    Then Admin should see common delete option enabled under header Manage Program for programpage
    
  @tag2DeleteMultipleProgram
  Scenario: Verify multiple program deletion by selecting multiple check boxes
    Given Admin is on Confirm Deletion alert for programpage
    When Admin clicks on Yes button on the alert for program
    Then Admin should land on Manage Program page and can see the selected programs are deleted from the data table for programpage

  @tag3DeleteMultipleProgram
  Scenario: Verify Admin is able to click Yes
    Given Admin is on Confirm deletion alert for program
    When Admin clicks on Yes button on the alert for program
    Then Admin can see alert message "Successful Program Deleted"

  @tag4DeleteMultipleProgram
  Scenario: Verify Admin is able to click <No>
    Given Admin is on Confirm deletion alert for program
    When Admin clicks on <No> button on the alert for program
    Then Admin can see the deletion alert disappears without deleting for program

  @tag5DeleteMultipleProgram
  Scenario: Verify Admin is able to close the window with <X>
    Given Admin is on Confirm deletion alert for program
    When Admin Click on <X> button on the alert for program
    Then Admin can see Confirm Deletion form disappear

  @tag6DeleteMultipleProgram
  Scenario: Verify Admin is able to search for a deleted program
    When Admin Searches for "XYZ" Deleted Program name
    Then There should be zero results