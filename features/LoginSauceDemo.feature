Feature: Login to SauceDemo

  Scenario: Successful login
    Given I am on the login page
    When I enter username "standard_user" and password "secret_sauce"
    Then I should be logged in successfully

  Scenario: Unsuccessful login with incorrect credentials
    Given I am on the login page
    When I enter username "invalid_user" and password "wrong_password"
    Then I should see a login error
