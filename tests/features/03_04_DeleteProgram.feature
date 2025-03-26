@Delpro @all
Feature: Delete Program

  Background: Admin is on program module after reaching dashboard
   Given Admin is on dashboard page after Login
    When Admin clicks Program on the navigation bar
  
  @tag1DeleteProgram
  Scenario: Verify delete feature
    When Admin clicks on delete button for a program
    Then Admin will get confirm deletion popup and able to see the "Confirm" text

  @tag2DeleteProgram
  Scenario: Verify Admin is able to click Yes
    Given Admin is on Confirm deletion alert for program
    When Admin clicks on Yes button on the alert for program
    Then Admin can see alert message "Program Deleted"

  @tag3DeleteProgram
  Scenario: Verify Admin is able to click <No>
    Given Admin is on Confirm deletion alert for program
    When Admin clicks on <No> button on the alert for program
    Then Admin can see the deletion alert disappears without deleting for program

  @tag4DeleteProgram
  Scenario: Verify Admin is able to close the window with <X>
    Given Admin is on Confirm deletion alert for program
    When Admin Click on <X> button on the alert for program
    Then Admin can see Confirm Deletion form disappear

  @tag5DeleteProgram
  Scenario: Verify Admin is able to search for a deleted program
    When Admin Searches for "XYZ" Deleted Program name
    Then There should be zero results