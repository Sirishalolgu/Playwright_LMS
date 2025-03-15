@propagi @all
Feature: ManageProgram_Pagination

  Background: 
    Given Admin is on Program module

  @tag1ManageProgramPagination
  Scenario: Verify Admin is able to click Next page link
    When Admin clicks Next page link on the program table
    Then Admin should see the Pagination has Next active link

  @tag2ManageProgramPagination
  Scenario: Verify Admin is able to click  Last page link
    When Admin clicks Last page link
    Then Admin should see the last page record on the table with Next page link are disabled

  @tag3ManageProgramPagination
  Scenario: Verify Admin is able to click Previous page link
    Given Admin is on last page of Program module table
    When Admin clicks Previous page link
    Then Admin should see the previous page record on the table with pagination has previous page link

  @tag4ManageProgramPagination
  Scenario: Verify Admin is able to click  First page link
    Given Admin is on Previous Program page
    When Admin clicks First page link
    Then Admin should see the very first page record on the table with Previous page link are disabled