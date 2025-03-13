@prosort @all
Feature: Sorting Program

  Background: 
    Given Admin is on Program module

  @tag1SortingProgram
  Scenario: Verify sorting of  Program name in Ascending or Descending order
    When Admin clicks on Arrow next to program Name
    Then Admin See the Program Name is sorted in Ascending or Descending order

  @tag2SortingProgram
  Scenario: Verify sorting of Program Description in Ascending or Descending order
    When Admin clicks on Arrow next to Program Description
    Then Admin See the program Description is sorted in Ascending or Descending order

  @tag3SortingProgram
  Scenario: Verify sorting of Program status in Ascending or Descending order
    When Admin clicks on Arrow next to Program status
    Then Admin See the Program Status is sorted in Ascending or Descending order