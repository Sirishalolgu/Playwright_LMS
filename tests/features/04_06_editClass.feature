Feature:Edit New class

Background: Admin is logged in to LMS Portal
    Given Admin is on dashboard page after Login
    When Admin clicks the Class Navigation bar in the Header

Scenario:Validate row level edit icon
When Admin clicks on the edit icon 
Then A new pop up with class details appears

Scenario:Check disabled  batch name
When Admin clicks on the edit icon 
Then Admin should see batch name field is disabled

Scenario:Check disabled class topic
When Admin clicks on the edit icon 
Then Admin should see class topic field is disabled

Scenario:Check if the fields are updated with valid data
When Update the fields with valid data and click save 
Then Admin gets message "class details updated Successfully " and see the updated values in data table

# Scenario:Check if the fields are updated with invalid values
# When Update the fields with invalid values and click save
# Then Admin should get Error message 

Scenario:Validate Cancel button on Edit popup
When Admin clicks Cancel button on edit popup
Then Admin can see the class details popup disappears and can see nothing changed for particular Class

