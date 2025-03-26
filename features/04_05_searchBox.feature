Feature:Search box 

Background: Admin is logged in to LMS Portal
    Given Admin is on dashboard page after Login
    When Admin clicks the Class Navigation bar in the Header

    Scenario:Search class by Batch Name
    When Admin enter the Batch Name in search textbox
    Then Admin should see Class details are searched by Batch Name

    Scenario:Search class by Class topic
    When Admin enter the Class topic in search textbox
    Then Admin should see Class details are searched by Class topic

    Scenario:
    When Admin enter the Staff Name in search textbox
    Then Admin should see Class details are searched by Staff name