Feature:Delete Class

Background: Admin is logged in to LMS Portal
    Given Admin is on dashboard page after Login
    When Admin clicks the Class Navigation bar in the Header

Scenario:Validate row level delete icon
When Admin clicks the delete icon
Then Admin should see a alert open with heading "Confirm" along with  <YES> and <NO> button for deletion

Scenario:Click Yes on deletion window
When Admin clicks yes option
Then Admin gets a message "Successful Class Deleted" alert and do not see that Class in the data table

Scenario:Click No on deletion window
When Admin clicks  No option
Then Admin can see the deletion alert disappears without deleting

Scenario:Validate Close(X) icon on Confirm Deletion alert
When Admin clicks on close button
Then Admin can see the deletion alert disappears without any changes


