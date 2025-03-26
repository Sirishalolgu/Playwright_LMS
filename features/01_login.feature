Feature: Login Page

  Scenario: Login Page Verification
    Given Admin gives the correct LMS portal URL
    Then Admin should land on the login page

  Scenario: login with valid credentials
    Given Admin is on dashboard page after Login
    When the url is clicked
    Then the browser opens

  Scenario: Verify Admin is able to land on login page with invalid URL
    Given Admin gives the invalid LMS portal URL
    Then Admin should be redirected to the login page

  Scenario: Verify for broken link
    Given Admin gives the correct LMS portal URL
    Then HTTP response >= 400. Then the link is broken

  Scenario: Verify the text spelling in the page
    Given Admin gives the correct LMS portal URL
    Then Admin should see correct spellings in all fields

  Scenario: Verify application name
    Given Admin gives the correct LMS portal URL
    Then Admin should see LMS - Learning Management System

  Scenario: Verify company name
    Given Admin gives the correct LMS portal URL
    Then Admin should see company name below the app name

  Scenario: Validate sign in content
    Given Admin gives the correct LMS portal URL
    Then Admin should see the "Please login to LMS application"

  Scenario: Verify text field is present
    Given Admin gives the correct LMS portal URL
    Then Admin should see two text field

  Scenario: Verify text on the first field
    Given Admin gives the correct LMS portal URL
    Then Admin should see "User" in the first text field

  Scenario: Verify asterisk next to USER text
    Given Admin gives the correct LMS portal URL
    Then Admin should see asterisk mark symbol next to "User" text field

  Scenario: Verify text on the second field
    Given Admin gives the correct LMS portal URL
    Then Admin should see "Password" in the second text field

  Scenario: Verify the alignment input field for the login
    Given Admin gives the correct LMS portal URL
    Then Admin should see input field on the centre of the page
  # @spellcheck

  Scenario: verify Login button is present
    Given Admin gives the correct LMS portal URL
    Then Admin should see login button

  Scenario: Verify input descriptive text in user field
    Given Admin gives the correct LMS portal URL
    Then Admin should see "User" in gray color

  Scenario: Verify input descriptive text in password field
    Given Admin gives the correct LMS portal URL
    Then Admin should see "Password" in gray color

  Scenario: Validate login with valid data in all field
    Given Admin gives the correct LMS portal URL
    And Admin is on login Page
    When Admin enter valid data in all field and clicks login button
    Then Admin should land on home page

  Scenario: Validate login with invalid data
    Given Admin gives the correct LMS portal URL
    And Admin is on login Page
    When Admin enter invalid data and clicks login button
    Then Error message "Invalid username and password Please try again"

  Scenario: Validate login credentials with null user name
    Given Admin gives the correct LMS portal URL
    And Admin is on login Page
    When Admin enter value only in password and clicks login button
    Then Error message "Please enter your user name"

  Scenario: Validate login credentials with null password
    Given Admin gives the correct LMS portal URL
    And Admin is on login Page
    When Admin enter value only in user name and clicks login button
    Then Error message should be "Please enter your password"

  Scenario: verify login button action through keyboard
    Given Admin gives the correct LMS portal URL
    And Admin is on login Page
    When Admin enter valid credentials and clicks login button through keyboard
    Then Admin should land on home page

  Scenario: verify login button action through mouse
    Given Admin gives the correct LMS portal URL
    And Admin is on login Page
    When Admin enter valid credentials and clicks login button through mouse
    Then Admin should land on home page
