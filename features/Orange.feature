Feature: User Login

  Scenario: Validating Login with valid credentials
    Given User is on Login Page
    When User enters valid Username into Username field
    And User enters valid password into password field
    And User clicks on Login button
    Then User should Login successfully

 