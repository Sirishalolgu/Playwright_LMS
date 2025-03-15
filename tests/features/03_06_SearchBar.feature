@prosearch @all
Feature: ProgramPage search_Bar

  Background: 
    Given Admin is on Program module

  @tag1ProgramPagesearch_Bar
  Scenario: Verify Admin is able to search results found for program name
    When Admin enter the program to search By program name
    Then Admin should able to see Program name description and status for searched program name

  @tag2ProgramPagesearch_Bar
  Scenario: Verify Admin is able to search results found for program description
    When Admin enter the program to search By program description
    Then Admin should able to see Program name description and status for searched program description

  @tag3ProgramPagesearch_Bar
  Scenario: Verify Admin is able to search results not found
    When Admin enter the program to search By program name that does not exist
    Then There should be zero results

  @tag4ProgramPagesearch_Bar
  Scenario: Verify Admin is able to search with partial program name
    When Admin enter the program to search By partial name of program
    Then Admin should able to see Program name description and status for searched program name