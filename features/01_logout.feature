Feature: Validation on Logout button

  Scenario: Verify logout functionality
    Given Admin is logged into the application
    When Admin clicks on the logout in the menu bar
    Then Admin should see login button

  Scenario: Verify back button function
    Given Admin gives the correct LMS portal URL
    And Admin is on login Page
    When Admin clicks browser back button
    # Then Admin should receive error message
